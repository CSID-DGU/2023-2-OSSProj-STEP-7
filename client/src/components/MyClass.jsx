import React from 'react';

// "use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var logo_png_1 = require("../Assets/Images/logo.png");
var react_router_dom_1 = require("react-router-dom");
var uuid_1 = require("uuid");
var Container = styled_components_1.default.div`width: 50%;`;

var MyClassDiv = styled_components_1.default.div`
  background-color: #EDC219;
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
  padding: 1.2rem 1.5rem 0.5rem 1.5rem;
  color: #fff;
`;

var LoginText = styled_components_1.default.p`
  font-size: 14px;
  color: #fff;
  margin: 150px 0 0 0;
`;

var ListWapper = styled_components_1.default.div`
  position: relative;
  display: flex;
  margin: 0.2rem 0;
`;

var MyList = styled_components_1.default.span`
  justify-content: left;
  margin: 7px 40px;
  font-size: 15px;
`;

var ClassButton = styled_components_1.default.button`
  position: absolute;
  right: 25px;
  margin: 7px 20px;
  padding: 5px 8px;
  height: 25px;
  font-size: 10.5px;
  background-color: #12314f;
  color: #fff;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;
// memo정민: 홈 '내 강의실' Component
var MyClass = function (_a) {
    var subjects = _a.subjects, loginCkeck = _a.loginCkeck;
    var navigate = (0, react_router_dom_1.useNavigate)();
    var moveToElass = function (e) {
        var subjectId = e.target.value;
        var subjectName = e.target.getAttribute('data-subject-name');
        navigate("/eclass/".concat(subjectId), { state: { subjectId: subjectId, subjectName: subjectName } });
    };
    // memo정민: 강의명과 '강의실 가기' 버튼
    var myClass = subjects
        .map(function (classes, index) {
        var subjectName = classes.subjectName, subjectId = classes.subjectId;
        return (React.createElement(ListWapper, { key: (0, uuid_1.v4)() },
            React.createElement(MyList, null, subjectName),
            React.createElement(ClassButton, { onClick: moveToElass, value: subjectId, "data-subject-name": subjectName }, "\uAC15\uC758\uC2E4 \uAC00\uAE30")));
    });
    return (React.createElement(React.Fragment, null, (myClass.length < 1 && !loginCkeck) ?
        React.createElement(Container, null,
            React.createElement(MyClassDiv, { style: { backgroundImage: "url(".concat(logo_png_1.default, ")") } },
                React.createElement(Title, null, "\uB0B4 \uAC15\uC758\uC2E4"),
                React.createElement(LoginText, null, "\uB85C\uADF8\uC778 \uD6C4 \uC0AC\uC6A9\uAC00\uB2A5\uD569\uB2C8\uB2E4.")))
        :
            React.createElement(Container, null,
                React.createElement(MyClassDiv, null,
                    React.createElement(Title, null, "\uB0B4 \uAC15\uC758\uC2E4"),
                    myClass))));
};

// export default MyClass; 
export default MyClass; 
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
