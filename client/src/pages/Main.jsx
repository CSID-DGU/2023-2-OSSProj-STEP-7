import React from 'react';
import  recoil from 'recoil';
import {Atom} from '../components/Atom';
import { RecoilRoot } from 'recoil';
import Api from "../components/api";

// 나머지 코드에서 Recoil을 사용할 수 있습니다.
// import { React, useEffect, useState } from "react";
// import Main from "../components/CourseRow.js";


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
var react_1 = require("react");
var MyClass_1 = require("../components/MyClass");
var MySchedule_1 = require("../components/MySchedule");
// var recoil_1 = require("recoil");
// var Atom_1 = require("recoil/Atom");
// var Api = require("lib/Api");
var styled_components_1 = require("styled-components");
var IMG_4174_jpeg_1 = require("../Assets/Images/IMG_4174.jpeg");
var quick_banner01_png_1 = require("../Assets/Images/quick_banner01.png");
var quick_banner02_png_1 = require("../Assets/Images/quick_banner02.png");
var quick_banner03_png_1 = require("../Assets/Images/quick_banner03.png");
var quick_banner04_png_1 = require("../Assets/Images/quick_banner04.png");
var quick_banner05_png_1 = require("../Assets/Images/quick_banner05.png");
var quick_banner06_png_1 = require("../Assets/Images/quick_banner06.png");

var TopMenu = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  padding: 0px 25rem;\n  background-color: #f8f9fa;\n"], ["\n  display: flex;\n  padding: 0px 25rem;\n  background-color: #f8f9fa;\n"])));
var TopMenuContent = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 0 auto;\n  padding: 15px 10rem;\n  position: relative; \n  cursor: pointer; \n  color: #333;\n  font-size: 15px;\n\n  .datalist {\n    display: none;\n    position: absolute;\n    top: 100%;\n    left: 0;\n    width: 100%;\n    background-color: #fff;\n    border: 1px solid #ccc;\n    padding: 0px;\n    z-index: 1;\n  }\n  \n  .datalist-item {\n    border-bottom: 1px solid #ccc; /* \uAC00\uB85C\uC120 \uCD94\uAC00 */\n    padding: 10px 0; /* \uC0C1\uD558 \uC5EC\uBC31 \uC870\uC815 */\n    width: 100%;\n    margin: 0 auto;\n    &:hover {\n      background-color: #C3BC93; /* \uD56D\uBAA9 1\uC5D0 hover\uB410\uC744 \uB54C \uBC30\uACBD\uC0C9\uC744 \uBCC0\uACBD\uD569\uB2C8\uB2E4. */\n    }\n  }\n\n  &:hover .datalist {\n    display: block;\n  }\n\n\n  &:hover {\n    background-color: #695B50;\n  }\n\n};\n"], ["\n  margin: 0 auto;\n  padding: 15px 10rem;\n  position: relative; \n  cursor: pointer; \n  color: #333;\n  font-size: 15px;\n\n  .datalist {\n    display: none;\n    position: absolute;\n    top: 100%;\n    left: 0;\n    width: 100%;\n    background-color: #fff;\n    border: 1px solid #ccc;\n    padding: 0px;\n    z-index: 1;\n  }\n  \n  .datalist-item {\n    border-bottom: 1px solid #ccc; /* \uAC00\uB85C\uC120 \uCD94\uAC00 */\n    padding: 10px 0; /* \uC0C1\uD558 \uC5EC\uBC31 \uC870\uC815 */\n    width: 100%;\n    margin: 0 auto;\n    &:hover {\n      background-color: #C3BC93; /* \uD56D\uBAA9 1\uC5D0 hover\uB410\uC744 \uB54C \uBC30\uACBD\uC0C9\uC744 \uBCC0\uACBD\uD569\uB2C8\uB2E4. */\n    }\n  }\n\n  &:hover .datalist {\n    display: block;\n  }\n\n\n  &:hover {\n    background-color: #695B50;\n  }\n\n};\n"])));
var TopMenuDiv = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding: 15px 0;\n  color: #ced4da;\n"], ["\n  padding: 15px 0;\n  color: #ced4da;\n"])));
var BgImage = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  min-height: 800px;\n  background-size: cover;\n"], ["\n  min-height: 800px;\n  background-size: cover;\n"])));
var MyWapper = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  margin: 4rem 0;\n"], ["\n  position: absolute;\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  margin: 4rem 0;\n"])));
var QuickMenuWapper = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: absolute;\n  top: 260px;\n  right: 0; \n  width: 180px;\n  padding: 10px;\n  background-color: #eaac17;\n"], ["\n  position: absolute;\n  top: 260px;\n  right: 0; \n  width: 180px;\n  padding: 10px;\n  background-color: #eaac17;\n"])));
var QuickMenuTitle = styled_components_1.default.span(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: block;\n  text-align: left;\n  margin: 5px;\n  padding-left: 5px;\n  font-weight: bold;\n  font-size: 15px;\n  color: #fff;\n"], ["\n  display: block;\n  text-align: left;\n  margin: 5px;\n  padding-left: 5px;\n  font-weight: bold;\n  font-size: 15px;\n  color: #fff;\n"])));
var QuickMenuContent = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  widht: 100%;\n  margin: 10px;\n  background-color: #f3d86b;\n\n  &:hover {\n    background-color: #EB9332;\n  }\n"], ["\n  display: flex;\n  widht: 100%;\n  margin: 10px;\n  background-color: #f3d86b;\n\n  &:hover {\n    background-color: #EB9332;\n  }\n"])));
var QuickMenuImage = styled_components_1.default.img(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  width: 35px;\n  height: 35px;\n  margin: 5px;\n"], ["\n  width: 35px;\n  height: 35px;\n  margin: 5px;\n"])));
var QuickMenuSpan = styled_components_1.default.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  text-align: left;\n  width: 70%;\n  padding: 3px 0 0 10px;\n  line-height: 40px;\n  font-weight: bold;\n  font-size: 12px;\n  color: #333;\n"], ["\n  text-align: left;\n  width: 70%;\n  padding: 3px 0 0 10px;\n  line-height: 40px;\n  font-weight: bold;\n  font-size: 12px;\n  color: #333;\n"])));





var Home = function () {
    var _a = (0, react_1.useState)([]), schedule = _a[0], setSchedule = _a[1];
    var _b = (0, react_1.useState)([]), subjects = _b[0], setSubjects = _b[1];
    var allEvent = (0, recoil.useRecoilValue)(Atom.EventState);
    var loginCheck = (0, recoil.useRecoilValue)(Atom.isLoginCheck);
    (0, react_1.useEffect)(function () {
        if (loginCheck) {
            (function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Api.get('/home').then(function (res) {
                                var _a = res.data.result, schedule = _a.schedule, subjects = _a.subjects;
                                setSchedule(__spreadArray([], schedule, true));
                                setSubjects(__spreadArray([], subjects, true));
                            })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); })();
        }
        else {
            setSchedule([]);
            setSubjects([]);
        }
    }, [loginCheck, allEvent]);
    var QuickMenuClick = function (url) {
        window.location.href = url; // QuickMenu 아이콘을 클릭하면 해당 URL로 이동합니다.
    };
    return (
    // <>
    <div>
        {loginCheck ? (<TopMenu>
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

        <BgImage style={{ backgroundImage: "url(".concat(IMG_4174_jpeg_1.default, ")") }}>
        <MyWapper>
          <MySchedule_1.default schedule={schedule} loginCkeck={loginCheck}></MySchedule_1.default>
          <MyClass_1.default subjects={subjects} loginCkeck={loginCheck}></MyClass_1.default>
        </MyWapper>
        <QuickMenuWapper>
          <QuickMenuTitle>QUICK MENU</QuickMenuTitle>
          <QuickMenuContent onClick={function () { return QuickMenuClick('https://www.dongguk.edu/main'); }}>
            <QuickMenuImage src={quick_banner01_png_1.default} alt='Quick Menu'/>
            <QuickMenuSpan>동국대학교</QuickMenuSpan>
          </QuickMenuContent>
          <QuickMenuContent onClick={function () { return QuickMenuClick('https://mdrims.dongguk.edu/'); }}>
            <QuickMenuImage src={quick_banner02_png_1.default} alt='Quick Menu'/>
            <QuickMenuSpan>mDRIMS</QuickMenuSpan>
          </QuickMenuContent> 
          <QuickMenuContent onClick={function () { return QuickMenuClick('https://ddp.dongguk.edu/login.jsp'); }}>
            <QuickMenuImage src={quick_banner03_png_1.default} alt='Quick Menu'/>
            <QuickMenuSpan>드림패스</QuickMenuSpan>
          </QuickMenuContent>
          <QuickMenuContent onClick={function () { return QuickMenuClick('https://ctl.dongguk.edu/main'); }}>
            <QuickMenuImage src={quick_banner04_png_1.default} alt='Quick Menu'/>
            <QuickMenuSpan>교수학습개발센터</QuickMenuSpan>
          </QuickMenuContent>
          <QuickMenuContent onClick={function () { return QuickMenuClick('https://dongguk.copykiller.com/'); }}>
            <QuickMenuImage src={quick_banner05_png_1.default} alt='Quick Menu'/>
            <QuickMenuSpan>카피킬러</QuickMenuSpan>
          </QuickMenuContent>
          <QuickMenuContent onClick={function () { return QuickMenuClick('https://lib.dongguk.edu/'); }}>
            <QuickMenuImage src={quick_banner06_png_1.default} alt='Quick Menu'/>
            <QuickMenuSpan>중앙도서관</QuickMenuSpan>
          </QuickMenuContent>
        </QuickMenuWapper>


      </BgImage>
      </div>);
};
}
export default Main;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
