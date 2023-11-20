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
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 50%\n"], ["\n  width: 50%\n"])));
var MyClassDiv = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: #EDC219;\n  border-radius: 10px;\n  margin: 2rem 3rem;\n  width: 55%;\n  height: 270px;\n  min-width: 500px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100px;\n"], ["\n  background-color: #EDC219;\n  border-radius: 10px;\n  margin: 2rem 3rem;\n  width: 55%;\n  height: 270px;\n  min-width: 500px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100px;\n"])));
var Title = styled_components_1.default.h2(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  text-align: left;\n  font-size: 16px;\n  padding: 1.2rem 1.5rem 0.5rem 1.5rem;\n  color: #fff;\n"], ["\n  text-align: left;\n  font-size: 16px;\n  padding: 1.2rem 1.5rem 0.5rem 1.5rem;\n  color: #fff;\n"])));
var LoginText = styled_components_1.default.p(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: 14px;\n  color: #fff;\n  margin: 150px 0 0 0;\n"], ["\n  font-size: 14px;\n  color: #fff;\n  margin: 150px 0 0 0;\n"])));
var ListWapper = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  margin: 0.2rem 0;\n"], ["\n  position: relative;\n  display: flex;\n  margin: 0.2rem 0;\n"])));
var MyList = styled_components_1.default.span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  justify-content : left;\n  margin: 7px 40px;\n  font-size: 15px;\n"], ["\n  justify-content : left;\n  margin: 7px 40px;\n  font-size: 15px;\n"])));
var ClassButton = styled_components_1.default.button(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  position: absolute;\n  right: 25px;\n  margin: 7px 20px;\n  padding: 5px 8px;\n  height: 25px;\n  font-size: 10.5px;\n  background-color: #12314f;\n  color: #fff;\n  border-radius: 4px;\n  border: none;\n  cursor: pointer;\n"], ["\n  position: absolute;\n  right: 25px;\n  margin: 7px 20px;\n  padding: 5px 8px;\n  height: 25px;\n  font-size: 10.5px;\n  background-color: #12314f;\n  color: #fff;\n  border-radius: 4px;\n  border: none;\n  cursor: pointer;\n"])));
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
