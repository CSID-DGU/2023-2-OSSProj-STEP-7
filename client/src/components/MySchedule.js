"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var react_router_dom_1 = require("react-router-dom");
var logo_png_1 = require("../Assets/Images/logo.png");
var uuid_1 = require("uuid");
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 50%;\n"], ["\n  width: 50%;\n"])));
var MyScheduleDiv = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  background-color: #EB9332;\n  float: right;\n  border-radius: 10px;\n  margin: 2rem 3rem;\n  width: 55%;\n  height: 270px;\n  min-width: 500px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100px;\n"], ["\n  position: relative;\n  background-color: #EB9332;\n  float: right;\n  border-radius: 10px;\n  margin: 2rem 3rem;\n  width: 55%;\n  height: 270px;\n  min-width: 500px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100px;\n"])));
var Title = styled_components_1.default.h2(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  text-align: left;\n  font-size: 16px;\n  padding: 0.5rem 1.5rem;\n  color: #fff;\n"], ["\n  text-align: left;\n  font-size: 16px;\n  padding: 0.5rem 1.5rem;\n  color: #fff;\n"])));
var LoginText = styled_components_1.default.p(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: 14px;\n  color: #fff;\n  margin: 150px 0 0 0;\n"], ["\n  font-size: 14px;\n  color: #fff;\n  margin: 150px 0 0 0;\n"])));
var CalendarButton = (0, styled_components_1.default)(react_router_dom_1.Link)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  top: 8px;\n  right: 25px;\n  font-size: 30px;\n  font-weight: 800;\n  color: #fff;\n"], ["\n  position: absolute;\n  top: 8px;\n  right: 25px;\n  font-size: 30px;\n  font-weight: 800;\n  color: #fff;\n"])));
var ListWapper = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  margin: 0.2rem 0;\n"], ["\n  position: relative;\n  display: flex;\n  margin: 0.2rem 0;\n"])));
var MyList = styled_components_1.default.span(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  justify-content : left;\n  margin: 7px 35px;\n  font-size: 15px;\n"], ["\n  justify-content : left;\n  margin: 7px 35px;\n  font-size: 15px;\n"])));
var DdayList = styled_components_1.default.span(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  position: absolute;\n  right: 10px;\n  margin: 7px 35px;\n  padding: 2px 8px;\n  font-size: 15px;\n  background-color: #12314f;\n  color: #fff;\n  border-radius: 5px;\n"], ["\n  position: absolute;\n  right: 10px;\n  margin: 7px 35px;\n  padding: 2px 8px;\n  font-size: 15px;\n  background-color: #12314f;\n  color: #fff;\n  border-radius: 5px;\n"])));
var ScheduleBox = styled_components_1.default.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  overflow-y: scroll;\n  height: 190px;\n  width: 485px;\n  &::-webkit-scrollbar{\n    width: 10px;\n    height: 10px;\n  }\n  &::-webkit-scrollbar-thumb{\n    background-color: hsla(0, 0%, 42%, 0.49);\n    border-radius: 6px;\n  }\n"], ["\n  overflow-y: scroll;\n  height: 190px;\n  width: 485px;\n  &::-webkit-scrollbar{\n    width: 10px;\n    height: 10px;\n  }\n  &::-webkit-scrollbar-thumb{\n    background-color: hsla(0, 0%, 42%, 0.49);\n    border-radius: 6px;\n  }\n"])));
// memo정민: 홈 '내 할 일 보기'
var MySchedule = function (_a) {
    var schedule = _a.schedule, loginCkeck = _a.loginCkeck;
    // memo정민: 등록된 일정 리스트
    var mySchedule = schedule
        .map(function (schedules, index) {
        return <ListWapper key={(0, uuid_1.v4)()}>
      <MyList>{schedules.title}</MyList>
      <DdayList>D{schedules.dday}</DdayList>
    </ListWapper>;
    });
    return (<>
    {(!loginCkeck) ?
            <Container>
      <MyScheduleDiv style={{ backgroundImage: "url(".concat(logo_png_1.default, ")") }}>
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
