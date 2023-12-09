<script type="text/javascript" src="https://cdn.jsdelivr.net/jquery/latest/jquery.min.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css"/>

<script>
    var calendar; // body태그에서 쓰기 위해 전역변수로 선언

    document.addEventListener('DOMContentLoaded', function () { // 페이지 로드
        var calendarEl = document.getElementById('calendar');

        const calendarData = () => {
            const firstAjax = new Promise((resolve, reject) => { // 휴가 리스트
                $.ajax({
                    url: '/attend/vacationAllList', 
                    type: 'get',
                    success: function (data) { // 성공시
                    console.log("휴가 data", data);
                        var events = data.map(function (event) {
                            return {
                                id: event.id,
                                title: '[' + event.vacationType.name + '] ' + event.user.name + '님',
                                start: event.startDate, // 휴가 시작하는 날짜
                                end: event.endDate, // 휴가 끝나는 날짜
                                textColor: 'white',
                                color: "rgb(255,136,0)", // 휴가는 주황색으로 표시
                                extendedProps: { // extendedPorps로 담아둬서 나중에 popover에서 써먹을 예정
                                    user: event.user.name,
                                    title: '[' + event.vacationType.name + '] ' + event.user.name + '님',
                                    contents: event.reason
                                }
                            };
                        });
                        resolve(events);
                    },
                    error: function (e) {
                        console.log("error" + e);
                        reject(e);
                    }
                });
            });
            const secondAjax = new Promise((resolve, reject) => { // 일정 리스트
                $.ajax({
                    url: '/attend/scheduleAllList',
                    type: 'get',
                    success: function (data) {
                    console.log("일정 data", data);
                        const events = data.map(function (event) {
                            return {
                                id: event.id,
                                title: '[일정] ' + event.user.name + '님',
                                start: event.startDate, // 일정 시작하는 날짜
                                end: event.endDate, // 일정 끝나는 날짜
                                textColor: 'white',
                                color: "rgb(72,151,255)", // 일정은 하늘색으로 표시
                                extendedProps: { // extendedPorps로 담아둬서 나중에 popover에서 써먹을 예정
                                    user: event.user.name,
                                    title: '[일정] ' + event.user.name + '님',
                                    subtitle: event.title,
                                    contents: event.contents
                                }
                            };
                        });
                        resolve(events);
                    },
                    error: function (e) {
                        console.log("error" + e);
                        reject(e);
                    }
                });
            });

            // 두 개의 Promise를 동시에 처리
            return Promise.all([firstAjax, secondAjax]).then((results) => {
                const [events, additionalEvents] = results;

                return events.concat(additionalEvents);
            });
        };
        calendarData().then((events) => {
          calendar = new FullCalendar.Calendar(calendarEl, { // 캘린더 초기화 및 설정
              plugins: ['interaction', 'dayGrid'],
              locale: 'kr', // 한국어
              expandRows: true,
              editable: false, // 마우스 이동 불가
              displayEventTime: false,
              dayMaxEventRows: 3, // 하루에 표시할 최대 이벤트 수를 제한
              eventLimit: true, // +more
              events: events,
              selectable: true, // 날짜 선택 가능 여부
              select: function (info) { // 날짜 선택 시 이벤트
                  handleDateSelection(info); // 선택한 날짜에 대한 처리 함수 호출
              },
              eventClick: function (info) { // 클릭 이벤트
              // mouse hover 기능을 쓸 땐 eventMouseEnter로 바꾸면 된다
              // 나의 경우는 main페이지에 담길 캘린더이기 때문에 eventMouseEnter로 해놓을 경우
              // 마우스가 지나간 자리에 popover가 다 펼쳐져서 정신 사납기 때문에 eventClick으로 설정했다.

                  // ajax 성공시 담아두었던 extendedProps를 여기서 써먹음
                  if (info.event.extendedProps) {
                      var title = info.event.extendedProps.title;
                      var subtitle = info.event.extendedProps.subtitle;
                      var contents = info.event.extendedProps.contents;
                      var user = info.event.extendedProps.user;

                      // 팝오버에 담길 내용
                      var popoverTitle = '<div style="font-weight: bold;">' + title + '</div>';
                      var popoverSubTitle = subtitle ? '<div>일정 제목: ' + subtitle + '</div>' : '';
                      var popoverContent =
                          '<div>상세 내용: ' + contents + '</div>' +
                          '<div>날짜: ' + moment(info.event.start).format('YYYY-MM-DD') +
                          ' ~ ' + moment(info.event.end).format('YYYY-MM-DD') + '</div>';

                      var popover = new bootstrap.Popover(info.el, { // 팝오버 생성
                          title: popoverTitle,
                          content: popoverSubTitle + popoverContent,
                          placement: 'auto',
                          trigger: 'manual',
                          html: true // html코드 인식할 수 있도록. 이게 빠져있으면 popover에 코드가 그대로 노출이 된다.
                      });

                      popover.show(); // 팝오버 표시

                      setTimeout(function () {// 2초 후 팝오버 숨김
                          popover.hide();
                      }, 2000);
                  }
              },
          });
          calendar.render();
      }).catch((e) => {
          console.error("error", e);
      });
</script>


<body>
   <!--일정 등록-->
   <div id="modalContainer"
        style="display: none; visibility: hidden; position: fixed;">
       <div class="modalContent border">
           <!--일정 등록 상세페이지-->
           <div id="saveSchedule"></div>
       </div>
   </div>

   <div class="col-lg-8">
          <!-- 일정 캘린더 -->
          <div id="calendar"></div>
   </div>
</body>

<script type="text/javascript">
    // 유효성 검사
    const saveScheduleCheck = (scheduleInfo) => {
        if (!scheduleInfo.title) {
            alert("일정 제목을 적어주세요.");
            this.disabled = false; // 버튼 다시 활성화
            return false;
        }
        if (!scheduleInfo.contents) {
            alert("일정 내용을 적어주세요.");
            this.disabled = false; // 버튼 다시 활성화
            return false;
        }
        return true;
    }

    // fullCalendar에서 날짜 선택 시 처리
    function handleDateSelection(info) { // 선택된 날짜의 정보(info)

        // 선택된 날짜를 YYYY-MM-DD 형식으로 포매팅한 후
        const startDate = moment(info.startStr).format('YYYY-MM-DD');
        const endDate = moment(info.endStr).format('YYYY-MM-DD');

        // 모달을 열고 모달 안에 startDate, endDate를 담아준다.
        openModalForDateSelection({info, startStr: startDate, endStr: endDate});
    }

function openModalForDateSelection({info, startStr, endStr}) { // 이전 handleDateSelection함수에서 받아온 정보
        const modalOpen = document.getElementById('modalContainer');
        const scrollLockElement = document.body;

        if (modalOpen.style.display === "none" || modalOpen.style.display === "") {
            modalOpen.style.display = "contents";
            modalOpen.style.visibility = "visible";
            scrollLockElement.classList.add('scroll-lock');

            $("#saveSchedule").load("/attend/openSaveSchedule", () => { // 모달 페이지 로드
                // 가져온 startDate는 문제 되지 않지만
                const startDate = moment(startStr).format('YYYY-MM-DD');

                // 가져온 endDate를 그대로 두면 선택된 날짜 다음 날짜의 0시 0분 0초로 서버로 전달이 된다.
                const endDate = moment(endStr).subtract(1, 'day').format('YYYY-MM-DD');
                // 이대로 서버에 저장하면 나중에 헷갈릴 수도 있기 때문에 
                // 종료 날짜 23시 59분 59초로 저장하기 위해 moment라이브러리의 .subtract 함수로 1일을 빼줬다.

                // 그리고 이를 모달창 안의 날짜 input에 기본 값을 담아줬다.
                $("input[name='dateFilter']").val(startDate + ' ~ ' + endDate); 

                // vacationDetails 페이지 내에서 요소 선택
                const scheduleModalClose = $('#modalCloseButton');
                const scheduleModalSend = $('#modalSendButton');

                scheduleModalClose.on('click', () => { // 모달 내 닫기 버튼
                    modalOpen.style.display = "none";
                    modalOpen.style.visibility = "hidden";
                    scrollLockElement.classList.remove('scroll-lock');

                    // 초기화
                    $("input[name='dateFilter']").val("");
                    $("input[name='title']").val("");
                    $("textarea[name='contents']").val("");

                    scheduleModalSend.off('click');
                });
                scheduleModalSend.on('click', () => { // 모달 내 일정 등록 버튼
                    this.disabled = true; // 버튼 비활성화 (중복 등록 방지)

                    // 모달창 내에서 입력했던 값 가져오기
                    const title = $("input[name='title']").val(); // 일정 제목
                    const contents = $("textarea[name='contents']").val(); // 일정 내용
                    const loginUserId = "[[${loginUser.id}]]";
                    const userIdNumber = parseInt(loginUserId) // userId

                    const scheduleInfo = { // 일정 정보 객체 생성
                        "user": userIdNumber,
                        "title": title,
                        "contents": contents,
                        "startDate": moment(startDate).startOf('day').format(),
                        "endDate": moment(endDate).endOf('day').format(),
                    }

                    if (saveScheduleCheck(scheduleInfo)) { // 유효성 검사 후 true가 반환이 되면 ajax 동작
                        $.ajax({
                            url: "/attend/saveSchedule",
                            type: "post",
                            contentType: "application/json",
                            data: JSON.stringify(scheduleInfo),
                            success: function (data) {
                                if (data && data.id != null) {
                                    alert("일정이 추가되었습니다.");

                                    // 새로운 데이터 비동기 갱신
                                    const newEvent = {
                                        id: data.id,
                                        title: '[일정] ' + data.user.name + '님',
                                        start: data.startDate,
                                        end: data.endDate,
                                        textColor: 'white',
                                        color: "rgb(72,151,255)",
                                        extendedProps: {
                                            title: data.title,
                                            contents: data.contents
                                        }
                                    };
                                    calendar.addEvent(newEvent); // 이를 위해 맨 위에 header쪽 스크립트에 calendar를 전역변수로 빼냄.

                                    modalOpen.style.display = "none";
                                    modalOpen.style.visibility = "hidden";
                                } else {
                                    alert("일정 추가 중 오류가 발생했습니다.");
                                    this.disabled = false; // 버튼 다시 활성화
                                }
                            },
                            error: function (e) {
                                console.log("error" + e);
                                alert("일정 추가 요청 중 오류가 발생했습니다.");
                                this.disabled = false; // 버튼 다시 활성화
                            },
                        });
                    }
                });
            });
        }
    }
</script>