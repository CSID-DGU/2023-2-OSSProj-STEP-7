import react from 'react';
import {useContext, useState, useEffect} from "react";
// import {atom} from '../components/Atom';
import Api from "../components/api";
// import { utils } from '../components/utils'; // utils
import { useRecoilValue } from 'recoil';
import { isLoginCheck, EventState} from '../components/Atom';
import { recoilPersist } from 'recoil-persist';
// import { useRecoilValue } from 'recoil';
// import { RecoilRoot } from 'recoil';
// import  recoil from 'recoil';

import quick_banner01_png from "../Assets/Images/quick_banner01.png";
import quick_banner02_png from "../Assets/Images/quick_banner02.png";
import quick_banner03_png from "../Assets/Images/quick_banner03.png";
import quick_banner04_png from "../Assets/Images/quick_banner04.png";
import quick_banner05_png from "../Assets/Images/quick_banner05.png";
import quick_banner06_png from "../Assets/Images/quick_banner06.png";
import IMG_4174_jpeg from "../Assets/Images/IMG_4174.jpeg";
import {AuthContext} from "../context/authContext";
import {gql, useQuery} from "@apollo/client";
import eclass_logo from '../Assets/Images/eclass_logo.png';


var MyClass = require("../components/MyClass");
var MySchedule = require("../components/MySchedule");
var styled_components = require("styled-components");

// var persistAtom = (0, recoil_persist.recoilPersist)().persistAtom;
// var recoil_persist = require("recoil-persist");
const { persistAtom } = recoilPersist();

const QUERY_USER = gql`
    query User($userId: ID!) {
       user(userId: $userId) {
        email
        isAdmin
        _id
        subjects {
          _id
        }
        username
      }
    }
`

const Main= () => {
// "use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });

var TopMenu = styled_components.default.div`
  display: flex;
  padding: 0px 25rem;
  background-color: #f8f9fa;
`;
var TopMenuContent = styled_components.default.div`
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
    padding: 10px 0; /* 세로간 간격 */
    width: 100%;
    margin: 0 auto;
    &:hover {
      background-color: #C3BC93; /* 마우스가 올라갔을 때 배경색을 변경합니다. */
    }
  }
  &:hover .datalist {
    display: block;
  }
  &:hover {
    background-color: #695B50;
  }
`;
var TopMenuDiv = styled_components.default.div`
  padding: 15px 0;
  color: #ced4da;
`;
var BgImage = styled_components.default.div`
  min-height: 800px;
  background-size: cover;
`;
var MyWapper = styled_components.default.div`
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 4rem 0;
`;
var QuickMenuWapper = styled_components.default.div`
  position: absolute;
  top: 260px;
  right: 0;
  width: 180px;
  padding: 10px;
  background-color: #eaac17;
`;
var QuickMenuTitle = styled_components.default.span`
  display: block;
  text-align: left;
  margin: 5px;
  padding-left: 5px;
  font-weight: bold;
  font-size: 15px;
  color: #fff;
`;
var QuickMenuContent = styled_components.default.div`
  display: flex;
  widht: 100%;
  margin: 10px;
  background-color: #f3d86b;

  &:hover {
    background-color: #EB9332;
  }
`;
var QuickMenuImage = styled_components.default.img`
  width: 35px;
  height: 35px;
  margin: 5px;
`;
var QuickMenuSpan = styled_components.default.div`
  text-align: left;
  width: 70%;
  padding: 3px 0 0 10px;
  line-height: 40px;
  font-weight: bold;
  font-size: 12px;
  color: #333;
`;
const HeaderWapper =  styled_components.default.div`
  height: 100px;
  display: flex;
  margin-left: 5rem;
`;
const EclassLogo = styled_components.default.img`
  position: relative;
  top: 0;
  botton: 0;
  margin: auto 10px auto 20px;
  height: 42px;
  width: 240px;
  background-image: url(${eclass_logo});
  background-size: cover;
`;
var QuickMenuClick = function (url) {
  window.location.href = url; // QuickMenu 아이콘을 클릭하면 해당 URL로 이동합니다.
};

var _a = (0, react.useState)([]), schedule = _a[0], setSchedule = _a[1];
var _b = (0, react.useState)([]), subjects = _b[0], setSubjects = _b[1];

const loginCheck = useRecoilValue(isLoginCheck);
const allEvent = useRecoilValue(EventState);

    useEffect(() =>{

      if(loginCheck){
        (async () =>{
          await Api.get('/main').then( (res) => {
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
    
    
    
    const context = useContext(AuthContext);
    function get_userId () {
        if(localStorage.getItem("token")) return context.user.userId
        else {
            window.location.replace("/login");
        }
    }
    return (
    <div>
        {localStorage.getItem("token") ? (<TopMenu>
          <TopMenuContent>
              커뮤니티
              <div className="datalist">
              <div className="datalist-item" onClick={function () { return QuickMenuClick('https://www.dongguk.edu/article/GENERALNOTICES/list'); }}>일반공지</div>
                <div className="datalist-item" onClick={function () { return QuickMenuClick('https://www.dongguk.edu/article/HAKSANOTICE/list'); }}>학사공지</div>
                <div className="datalist-item" onClick={function () { return QuickMenuClick(' https://www.dongguk.edu/article/JANGHAKNOTICE/list'); }}>장학공지</div>
                <div className="datalist-item" onClick={function () { return QuickMenuClick('https://8877.dongguk.edu/nc20/cust/main'); }}>원격지원</div>
              </div>
            </TopMenuContent>
            <TopMenuDiv>|</TopMenuDiv>
            <TopMenuContent>편의기능
                <div className="datalist">
                <div className="datalist-item" onClick={function () { return QuickMenuClick('https://portal.dongguk.edu/member/login/login.do?sso=ok'); }}>동국대 포탈</div>
                <div className="datalist-item">KMOOC</div>
              </div>
            </TopMenuContent>
          </TopMenu>) : (<TopMenu>
            <TopMenuContent>
              커뮤니티
              <div className="datalist">
                <div className="datalist-item" onClick={function () { return QuickMenuClick('https://www.dongguk.edu/article/GENERALNOTICES/list'); }}>일반공지</div>
                <div className="datalist-item" onClick={function () { return QuickMenuClick('https://www.dongguk.edu/article/HAKSANOTICE/list'); }}>학사공지</div>
                <div className="datalist-item" onClick={function () { return QuickMenuClick(' https://www.dongguk.edu/article/JANGHAKNOTICE/list'); }}>장학공지</div>
                <div className="datalist-item" onClick={function () { return QuickMenuClick('https://8877.dongguk.edu/nc20/cust/main'); }}>원격지원</div>
              </div>
            </TopMenuContent>
            <TopMenuDiv>|</TopMenuDiv>
            <TopMenuContent>
              편의기능
              <div className="datalist">
                <div className="datalist-item" onClick={function () { return QuickMenuClick('https://portal.dongguk.edu/member/login/login.do?sso=ok'); }}>동국대 포탈</div>
                <div className="datalist-item" onClick={function () { return QuickMenuClick('http://www.kmooc.kr/'); }}>KMOOC</div>
              </div>
            </TopMenuContent>
          </TopMenu>)}
        <BgImage style={{ backgroundImage: "url(".concat(IMG_4174_jpeg, ")") }}>   
        <MyWapper>
          <MySchedule.default schedule={schedule} logincheck={localStorage.getItem("token")} ></MySchedule.default>
          <MyClass.default subjects={subjects} logincheck={localStorage.getItem("token")}></MyClass.default>
        </MyWapper> 
        <QuickMenuWapper>
          <QuickMenuTitle>QUICK MENU</QuickMenuTitle>
          <QuickMenuContent onClick={function () { return QuickMenuClick('https://www.dongguk.edu/main'); }}>
            <QuickMenuImage src={quick_banner01_png} alt='Quick Menu'/>
            <QuickMenuSpan>동국대학교</QuickMenuSpan>
          </QuickMenuContent>
          <QuickMenuContent onClick={function () { return QuickMenuClick('https://mdrims.dongguk.edu/'); }}>
            <QuickMenuImage src={quick_banner02_png} alt='Quick Menu'/>
            <QuickMenuSpan>mDRIMS</QuickMenuSpan>
          </QuickMenuContent> 
          <QuickMenuContent onClick={function () { return QuickMenuClick('https://ddp.dongguk.edu/login.jsp'); }}>
            <QuickMenuImage src={quick_banner03_png} alt='Quick Menu'/>
            <QuickMenuSpan>드림패스</QuickMenuSpan>
          </QuickMenuContent>
          <QuickMenuContent onClick={function () { return QuickMenuClick('https://ctl.dongguk.edu/main'); }}>
            <QuickMenuImage src={quick_banner04_png} alt='Quick Menu'/>
            <QuickMenuSpan>교수학습개발센터</QuickMenuSpan>
          </QuickMenuContent>
          <QuickMenuContent onClick={function () { return QuickMenuClick('https://dongguk.copykiller.com/'); }}>
            <QuickMenuImage src={quick_banner05_png} alt='Quick Menu'/>
            <QuickMenuSpan>카피킬러</QuickMenuSpan>
          </QuickMenuContent>
          <QuickMenuContent onClick={function () { return QuickMenuClick('https://lib.dongguk.edu/'); }}>
            <QuickMenuImage src={quick_banner06_png} alt='Quick Menu'/>
            <QuickMenuSpan>중앙도서관</QuickMenuSpan>
          </QuickMenuContent>
        </QuickMenuWapper>
      </BgImage>
      </div>
      );
    };

export default Main;
