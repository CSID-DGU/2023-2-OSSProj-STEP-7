import {useEffect,useState} from 'react'
import {Subjects,Schedules} from 'interfaces/homeSchedule';
import MyClass from '../Components/MyClass';
import MySchedule from '../Components/MySchedule';
import { useRecoilValue } from 'recoil';
import { isLoginCheck, EventState} from 'recoil/Atom'
import * as Api from 'lib/Api';
import styled from 'styled-components';
import background_image from '../Assets/Images/IMG_4174.jpeg';
import QuickMenu_image from '../Assets/Images/quick_banner01.png';
import QuickMenu_image2 from '../Assets/Images/quick_banner02.png';
import QuickMenu_image3 from '../Assets/Images/quick_banner03.png';
import QuickMenu_image4 from '../Assets/Images/quick_banner04.png';
import QuickMenu_image5 from '../Assets/Images/quick_banner05.png';
import QuickMenu_image6 from '../Assets/Images/quick_banner06.png';

const TopMenu = styled.div`
  display: flex;
  padding: 0px 25rem;
  background-color: #f8f9fa;
`;
const TopMenuContent = styled.div`
  margin: 0 auto;
  padding: 15px 10rem;
  position: relative; 
  cursor: pointer; 
  color: #333;
  font-size: 15px;

  .datalist {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 0px;
    z-index: 1;
  }
  
  .datalist-item {
    border-bottom: 1px solid #ccc; /* 가로선 추가 */
    padding: 10px 0; /* 상하 여백 조정 */
    width: 100%;
    margin: 0 auto;
    &:hover {
      background-color: #C3BC93; /* 항목 1에 hover됐을 때 배경색을 변경합니다. */
    }
  }

  &:hover .datalist {
    display: block;
  }


  &:hover {
    background-color: #695B50;
  }

};
`;
const TopMenuDiv =styled.div`
  padding: 15px 0;
  color: #ced4da;
`;
const BgImage = styled.div`
  min-height: 800px;
  background-size: cover;
`;
const MyWapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 4rem 0;
`;
const QuickMenuWapper = styled.div`
  position: absolute;
  top: 260px;
  right: 0; 
  width: 180px;
  padding: 10px;
  background-color: #eaac17;
`;
const QuickMenuTitle = styled.span`
  display: block;
  text-align: left;
  margin: 5px;
  padding-left: 5px;
  font-weight: bold;
  font-size: 15px;
  color: #fff;
`;
const QuickMenuContent = styled.div`
  display: flex;
  widht: 100%;
  margin: 10px;
  background-color: #f3d86b;

  &:hover {
    background-color: #EB9332;
  }
`;
const QuickMenuImage = styled.img`
  width: 35px;
  height: 35px;
  margin: 5px;
`;
const QuickMenuSpan = styled.div`
  text-align: left;
  width: 70%;
  padding: 3px 0 0 10px;
  line-height: 40px;
  font-weight: bold;
  font-size: 12px;
  color: #333;
`;
const LeftBannerWapper = styled.div`
  position: absolute;
  top: 260px;
  width: 110px;
  padding: 10px;
  font-size: 15px;
  font-weight: 500;
  background-color: #695b50;
`;
const LeftBannerTitle = styled.span`
  display: block;
  margin: 5px 0 10px 0;
  font-size: 15px;
  font-weight: bold;
  color: #fff;
`;
const LeftBannerS = styled.div`
  width: 100%;
  height: 50px;
  line-height: 50px;
  margin: 5px 0;
  font-size: 14px;
  font-weight: bold;
  background-color: #edc219;
`;
const LeftBannerJ = styled.div`
  width: 100%;
  height: 50px;
  line-height: 50px;
  margin: 5px 0;
  font-size: 14px;
  font-weight: bold;
  background-color: #eb9332;
`;
const LeftBannerC = styled.div`
  width: 100%;
  height: 50px;
  line-height: 50px;
  margin: 5px 0;
  font-size: 14px;
  font-weight: bold;
  background-color: #e15e39;
`;
const LeftBanenrSpan = styled.span`
  color: #fff;
`;

const Home = () => {
  const [schedule,setSchedule] = useState<Schedules>([]);
  const [subjects,setSubjects] = useState<Subjects>([]);
  const allEvent = useRecoilValue(EventState);
  const loginCheck = useRecoilValue(isLoginCheck);

  useEffect(() =>{
    if(loginCheck){
      (async () =>{
        await Api.get('/home').then( (res) => {
          const {schedule,subjects} = res.data.result;
          setSchedule([...schedule]);
          setSubjects([...subjects]);
        });
      })(); 
    }
    else {
      setSchedule([]);
      setSubjects([]);
    }
  },[loginCheck,allEvent])

  const QuickMenuClick = (url: string) => {
    window.location.href = url; // QuickMenu 아이콘을 클릭하면 해당 URL로 이동합니다.
  };


  return (
    <>
      <div>
        { loginCheck ? (
        <TopMenu>
          <TopMenuContent>
              커뮤니티
              <div className="datalist">
              <div className="datalist-item" onClick={() => QuickMenuClick('https://www.dongguk.edu/article/GENERALNOTICES/list')}>일반공지</div>
                <div className="datalist-item" onClick={() => QuickMenuClick('https://www.dongguk.edu/article/HAKSANOTICE/list')}>학사공지</div>
                <div className="datalist-item" onClick={() => QuickMenuClick(' https://www.dongguk.edu/article/JANGHAKNOTICE/list')}>장학공지</div>
                <div className="datalist-item" onClick={() => QuickMenuClick('https://8877.dongguk.edu/nc20/cust/main')}>원격지원</div>
              </div>
            </TopMenuContent>
            <TopMenuDiv>|</TopMenuDiv>
            <TopMenuContent>편의기능
                <div className="datalist">
                <div className="datalist-item" onClick={() => QuickMenuClick('https://portal.dongguk.edu/member/login/login.do?sso=ok')}>동국대 포탈</div>
                <div className="datalist-item">KMOOC</div>
              </div>
            </TopMenuContent>
          </TopMenu>
        ) : (
          <TopMenu>
            <TopMenuContent>
              커뮤니티
              <div className="datalist">
                <div className="datalist-item" onClick={() => QuickMenuClick('https://www.dongguk.edu/article/GENERALNOTICES/list')}>일반공지</div>
                <div className="datalist-item" onClick={() => QuickMenuClick('https://www.dongguk.edu/article/HAKSANOTICE/list')}>학사공지</div>
                <div className="datalist-item" onClick={() => QuickMenuClick(' https://www.dongguk.edu/article/JANGHAKNOTICE/list')}>장학공지</div>
                <div className="datalist-item" onClick={() => QuickMenuClick('https://8877.dongguk.edu/nc20/cust/main')}>원격지원</div>
              </div>
            </TopMenuContent>
            <TopMenuDiv>|</TopMenuDiv>
            <TopMenuContent>
              편의기능
              <div className="datalist">
                <div className="datalist-item" onClick={() => QuickMenuClick('https://portal.dongguk.edu/member/login/login.do?sso=ok')}>동국대 포탈</div>
                <div className="datalist-item" onClick={() => QuickMenuClick('http://www.kmooc.kr/')}>KMOOC</div>

              </div>

            </TopMenuContent>
          </TopMenu>
        )}

        <BgImage style={{ backgroundImage: `url(${background_image})` }}>
        <MyWapper>
          <MySchedule schedule={schedule} loginCkeck={loginCheck}></MySchedule>
          <MyClass subjects={subjects} loginCkeck={loginCheck}></MyClass>
        </MyWapper>
        <QuickMenuWapper>
          <QuickMenuTitle>QUICK MENU</QuickMenuTitle>
          <QuickMenuContent onClick={() => QuickMenuClick('https://www.dongguk.edu/main')}>
            <QuickMenuImage src={QuickMenu_image} alt='Quick Menu' />
            <QuickMenuSpan>동국대학교</QuickMenuSpan>
          </QuickMenuContent>
          <QuickMenuContent onClick={() => QuickMenuClick('https://mdrims.dongguk.edu/')}>
            <QuickMenuImage src={QuickMenu_image2} alt='Quick Menu'/>
            <QuickMenuSpan>mDRIMS</QuickMenuSpan>
          </QuickMenuContent> 
          <QuickMenuContent onClick={() => QuickMenuClick('https://ddp.dongguk.edu/login.jsp')}>
            <QuickMenuImage src={QuickMenu_image3} alt='Quick Menu' />
            <QuickMenuSpan>드림패스</QuickMenuSpan>
          </QuickMenuContent>
          <QuickMenuContent onClick={() => QuickMenuClick('https://ctl.dongguk.edu/main')}>
            <QuickMenuImage src={QuickMenu_image4} alt='Quick Menu' />
            <QuickMenuSpan>교수학습개발센터</QuickMenuSpan>
          </QuickMenuContent>
          <QuickMenuContent onClick={() => QuickMenuClick('https://dongguk.copykiller.com/')}>
            <QuickMenuImage src={QuickMenu_image5} alt='Quick Menu' />
            <QuickMenuSpan>카피킬러</QuickMenuSpan>
          </QuickMenuContent>
          <QuickMenuContent onClick={() => QuickMenuClick('https://lib.dongguk.edu/')}>
            <QuickMenuImage src={QuickMenu_image6} alt='Quick Menu' />
            <QuickMenuSpan>중앙도서관</QuickMenuSpan>
          </QuickMenuContent>
        </QuickMenuWapper>
        {/* {loginCheck ? 
          <LeftBannerWapper>
            <LeftBannerTitle>학교공지</LeftBannerTitle>
            <LeftBannerS>
              <LeftBanenrSpan>학사공지</LeftBanenrSpan>
            </LeftBannerS>
            <LeftBannerJ>
              <LeftBanenrSpan>장학공지</LeftBanenrSpan>
            </LeftBannerJ>
            <LeftBannerC>
              <LeftBanenrSpan>취업공지</LeftBanenrSpan>
            </LeftBannerC>
          </LeftBannerWapper>
        : ''} */}
      </BgImage>
      </div>
    </>
  )
}

export default Home
