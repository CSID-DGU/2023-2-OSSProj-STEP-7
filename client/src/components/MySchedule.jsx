"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var react_router_dom_1 = require("react-router-dom");
var logo_png = require("../Assets/Images/logo.png");
var uuid_1 = require("uuid");

var Container = styled_components_1.default.div`width: 50%;`;

var MyScheduleDiv = styled_components_1.default.div`
  position: relative;
  background-color: #EB9332;
  float: right;
  border-radius: 10px;
  margin: 2rem 3rem;
  width: 55%;
  height: 270px;
  min-width: 500px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100px;
`;

var Title = styled_components_1.default.h2`
  text-align: left;
  font-size: 16px;
  padding: 0.5rem 1.5rem;
  color: #fff;
`;

var LoginText = styled_components_1.default.p`
  font-size: 14px;
  color: #fff;
  margin: 150px 0 0 0;
`;

var CalendarButton = styled_components_1.default(react_router_dom_1.Link)`
  position: absolute;
  top: 8px;
  right: 25px;
  font-size: 30px;
  font-weight: 800;
  color: #fff;
`;

var ListWapper = styled_components_1.default.div`
  position: relative;
  display: flex;
  margin: 0.2rem 0;
`;

var MyList = styled_components_1.default.span`
  justify-content: left;
  margin: 7px 35px;
  font-size: 15px;
`;

var DdayList = styled_components_1.default.span`
  position: absolute;
  right: 10px;
  margin: 7px 35px;
  padding: 2px 8px;
  font-size: 15px;
  background-color: #12314f;
  color: #fff;
  border-radius: 5px;
`;

var ScheduleBox = styled_components_1.default.div`
  overflow-y: scroll;
  height: 190px;
  width: 485px;
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: hsla(0, 0%, 42%, 0.49);
    border-radius: 6px;
  }
`;



// memo정민: 홈 '내 할 일 보기'
var MySchedule = function (_a) {
    var schedule = _a.schedule, loginCheck = _a.loginCheck;
    // memo정민: 등록된 일정 리스트
    var mySchedule = schedule
        .map(function (schedules, index) {
        return <ListWapper key={(0, uuid_1.v4)()}>
      <MyList>{schedules.title}</MyList>
      <DdayList>D{schedules.dday}</DdayList>
    </ListWapper>;
    });
    return (<>
    {(!loginCheck) ?
            <Container>
      <MyScheduleDiv style={{ backgroundImage: `url(${logo_png})`}}>
      {/* <MyClassDiv style={{ backgroundImage: `url(${logo_png})`}}> */}
        <Title>내 시간표</Title>
        <LoginText>로그인 후 사용가능합니다.</LoginText>
      </MyScheduleDiv>
    </Container>
            :
                <Container>
      <MyScheduleDiv>
        <Title>내 할 일 보기</Title>
        <CalendarButton to='/calendar'>+</CalendarButton>
        <ScheduleBox>
          {mySchedule.length > 0 ? mySchedule : <p>할 일이 없습니다.</p>}
        </ScheduleBox>
      </MyScheduleDiv>
    </Container>}
    </>);
};
export default MySchedule;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
