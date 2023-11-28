
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var styled_components_1 = require("styled-components");
var react_2 = require("@fullcalendar/react");
var daygrid_1 = require("@fullcalendar/daygrid");
var timegrid_1 = require("@fullcalendar/timegrid");
var interaction_1 = require("@fullcalendar/interaction");
var ko_1 = require("@fullcalendar/core/locales/ko");
var SubjectScheduleAdd_1 = require("Components/SubjectScheduleAdd");
var PersonalScheduleAdd_1 = require("Components/PersonalScheduleAdd");
var PersonalScheduleDetail_1 = require("Components/PersonalScheduleDetail");
var SubjectDetail_1 = require("Components/SubjectDetail");
var recoil_1 = require("recoil");
var Atom_1 = require("recoil/Atom");
var uuid_1 = require("uuid");
var check_png_1 = require("Assets/Images/check.png");
var ai_1 = require("react-icons/ai");
var moment_1 = require("moment");
var Api = require("lib/Api");
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width : 80%;\n  margin : 3rem auto 5rem;\n"], ["\n  width : 80%;\n  margin : 3rem auto 5rem;\n"])));
var Filter = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display : flex;\n  flex-direction : column;\n  align-content: flex-end\n  \n  &:first-child {\n      margin-bottom : 2rem;\n  }\n  &:last-child {\n      margin-top : 2rem;\n  }\n"], ["\n  display : flex;\n  flex-direction : column;\n  align-content: flex-end\n  \n  &:first-child {\n      margin-bottom : 2rem;\n  }\n  &:last-child {\n      margin-top : 2rem;\n  }\n"])));
var PostBtn = styled_components_1.default.button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  &:first-child {\n      margin-right : 1rem;\n  }\n\n  width : 9.5rem;\n  height : 2.8rem;\n  background-color : ", ";\n  border:none;\n  border-radius: 5px;\n  color: white;\n  padding: 0.2rem;\n  font-size: 1rem;\n  font-weight: bold;\n  cursor: pointer;\n"], ["\n  &:first-child {\n      margin-right : 1rem;\n  }\n\n  width : 9.5rem;\n  height : 2.8rem;\n  background-color : ", ";\n  border:none;\n  border-radius: 5px;\n  color: white;\n  padding: 0.2rem;\n  font-size: 1rem;\n  font-weight: bold;\n  cursor: pointer;\n"])), function (props) { return props.btnName === 'personal' ? 'orange' : '#6ED746'; });
var CalendarDiv = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: felx;\n  flex-direction: row;\n"], ["\n  display: felx;\n  flex-direction: row;\n"])));
var CalendarBody = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 75%; \n"], ["\n  width: 75%; \n"])));
var TaskBody = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: 22%;\n  margin-left: 3%;\n"], ["\n  width: 22%;\n  margin-left: 3%;\n"])));
var TaskBodyStyle = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  text-align: left;\n  padding-left: 1rem;\n  border-radius: 5px;\n  border: 2px solid #c9b087;\n"], ["\n  text-align: left;\n  padding-left: 1rem;\n  border-radius: 5px;\n  border: 2px solid #c9b087;\n"])));
var TodoList = (0, styled_components_1.default)(TaskBodyStyle)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  height: 60%;\n"], ["\n  height: 60%;\n"])));
var CompleteList = (0, styled_components_1.default)(TaskBodyStyle)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  margin-top: 1rem;\n  height : 37%;\n"], ["\n  margin-top: 1rem;\n  height : 37%;\n"])));
var TodoTask = styled_components_1.default.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  border: 0;\n  background-color: transparent;\n  margin-top: 0.5rem;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  border: 0;\n  background-color: transparent;\n  margin-top: 0.5rem;\n"])));
var Subheading = styled_components_1.default.p(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  display: block;\n  margin: 0.7rem 1rem 1.5rem 0;\n  background-color:#c9b087;\n  border-radius : 0.5rem;\n  height: 2rem;\n  color:white;\n  text-align: center;\n  font-weight: 600;\n  vertical-align: middle;\n  padding-top:0.5rem;\n"], ["\n  display: block;\n  margin: 0.7rem 1rem 1.5rem 0;\n  background-color:#c9b087;\n  border-radius : 0.5rem;\n  height: 2rem;\n  color:white;\n  text-align: center;\n  font-weight: 600;\n  vertical-align: middle;\n  padding-top:0.5rem;\n"])));
var Dday = styled_components_1.default.div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  background-color: #12314f;\n  color: #fff;\n  border-radius: 0.5rem;\n  margin-right: 1.5rem;\n  font-size: 0.5rem;\n  text-align: center;\n  padding : 0.2rem 0;\n  width: 2.5rem;\n  height: 1rem;\n"], ["\n  background-color: #12314f;\n  color: #fff;\n  border-radius: 0.5rem;\n  margin-right: 1.5rem;\n  font-size: 0.5rem;\n  text-align: center;\n  padding : 0.2rem 0;\n  width: 2.5rem;\n  height: 1rem;\n"])));
var MainFilter = styled_components_1.default.div(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  display:flex;\n  justify-content : flex-end;\n"], ["\n  display:flex;\n  justify-content : flex-end;\n"])));
var RightAlign = styled_components_1.default.div(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  display:flex;\n  justify-content : flex-end;\n  margin-top : 2rem;\n"], ["\n  display:flex;\n  justify-content : flex-end;\n  margin-top : 2rem;\n"])));
var PostBtns = (0, styled_components_1.default)(RightAlign)(templateObject_15 || (templateObject_15 = __makeTemplateObject([""], [""])));
var SubFilter = (0, styled_components_1.default)(RightAlign)(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  margin-bottom: 2rem;\n"], ["\n  margin-bottom: 2rem;\n"])));
var RestoreBtn = styled_components_1.default.button(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n  background-color: #A69D8F;\n  border:none;\n  border-radius: 0.5rem;\n  margin-right: 1.5rem;\n  padding: 0.05rem 0.02rem;\n  width: 5rem;\n  color: #fff;\n  font-size: 0.7rem;\n  font-weight: bold;\n  text-align: center;\n"], ["\n  background-color: #A69D8F;\n  border:none;\n  border-radius: 0.5rem;\n  margin-right: 1.5rem;\n  padding: 0.05rem 0.02rem;\n  width: 5rem;\n  color: #fff;\n  font-size: 0.7rem;\n  font-weight: bold;\n  text-align: center;\n"])));
var TaskTitle = styled_components_1.default.span(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n  display:block;\n  width:80%;\n  margin-left: 0.5rem;\n  tex-align: left;\n"], ["\n  display:block;\n  width:80%;\n  margin-left: 0.5rem;\n  tex-align: left;\n"])));
var CompleteTitle = (0, styled_components_1.default)(TaskTitle)(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n  text-decoration: line-through;\n  color:#737373;\n"], ["\n  text-decoration: line-through;\n  color:#737373;\n"])));
var TaskIconConatiner = styled_components_1.default.div(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n  padding-top: 0.1rem;\n"], ["\n  padding-top: 0.1rem;\n"])));
// memo지혜 : 중요도 배열
var IMPORTANCE = ['EASYGOING', 'NORMAL', 'IMPORTANT'];
// memo지혜 : 불토명도 배열
var ALPHA = [0.3, 0.6, 0.9];
// memo지혜 : 오늘을 기점으로 month 반환
var getTodayMonth = function () {
    var Tmonth = String(new Date().getMonth() + 1);
    if (Tmonth.length === 1) {
        return "0".concat(Tmonth);
    }
    return Tmonth;
};
// memo지혜 : 오늘을 기점으로 year반환
var getTodayYear = function () {
    return String(new Date().getFullYear());
};
var Calendar = function () {
    // memo지혜 : 과목명 상태관리
    var _a = (0, react_1.useState)([]), subjectList = _a[0], setSubjectList = _a[1];
    // memo지혜 : 해야 할 일 상태관리
    var _b = (0, react_1.useState)([]), taskList = _b[0], setTaskList = _b[1];
    // memo지혜 : 완료한 일 상태관리
    var _c = (0, react_1.useState)([]), completeList = _c[0], setCompleteList = _c[1];
    // memo지혜 : 모달 상태관리
    var _d = (0, react_1.useState)({ personalPost: false, subjectPost: false }), postModal = _d[0], setpostModal = _d[1];
    var _e = (0, react_1.useState)({ personalRead: false, subjectRead: false }), readModal = _e[0], setReadModal = _e[1];
    // memo지혜 : 선택된 일정에 대한 상태관리
    var _f = (0, react_1.useState)(), evt = _f[0], setEvents = _f[1];
    var _g = (0, react_1.useState)(''), id = _g[0], setId = _g[1];
    // memo지혜 : month와 year에 대한 상태관리
    var _h = (0, react_1.useState)(getTodayMonth), month = _h[0], setMonth = _h[1];
    var _j = (0, react_1.useState)(getTodayYear), year = _j[0], setYear = _j[1];
    // memo지혜 : 전체 일정에 대한 상태관리
    var _k = (0, recoil_1.useRecoilState)(Atom_1.EventState), evtState = _k[0], setEvtState = _k[1];
    var calendarRef = (0, react_1.useRef)(null);
    // memo지혜 : 필터
    var _l = (0, react_1.useState)('ALL'), mainFilter = _l[0], setMainFilter = _l[1];
    var _m = (0, react_1.useState)('ALL'), subFilter = _m[0], setSubFilter = _m[1];
    (0, react_1.useEffect)(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        // memo지혜 : 일정관리에 필요한 GET request
                        return [4 /*yield*/, performGetRequest(year, month)];
                    case 1:
                        // memo지혜 : 일정관리에 필요한 GET request
                        _a.sent();
                        // memo지혜 : 개인과목일정 등록을 위한 과목명 상태관리
                        return [4 /*yield*/, Api.get('/home').then(function (res) {
                                var subjects = res.data.result.subjects;
                                setSubjectList(__spreadArray([], subjects.map(function (el) { return el.subjectName; }), true));
                            })];
                    case 2:
                        // memo지혜 : 개인과목일정 등록을 위한 과목명 상태관리
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); })();
    }, [year, month]);
    (0, react_1.useEffect)(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var visitedMonth;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        visitedMonth = "".concat(year, "-").concat(month);
                        if (mainFilter === 'ALL') {
                            reloadCalendarEvents(year, month);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, Api.get("/schedule/select?schedule=".concat(mainFilter, "&month=").concat(visitedMonth)).then(function (res) {
                                var filteringResult = res.data.result;
                                filteringResult.forEach(function (s) {
                                    if (s.schedule === 'COMMON') {
                                        var idx = IMPORTANCE.indexOf(s.importance);
                                        s['color'] = "rgba(255,0,0,".concat(ALPHA[idx], ")");
                                        s.scheduleType === 'TASK' ? (s['imageurl'] = check_png_1.default) : (s['imageurl'] = '');
                                    }
                                    else if (s.schedule === 'SUBJECT') {
                                        var idx = IMPORTANCE.indexOf(s.importance);
                                        s['color'] = "rgba(0,255,0,".concat(ALPHA[idx], ")");
                                        s.scheduleType === 'TASK' ? (s['imageurl'] = check_png_1.default) : (s['imageurl'] = '');
                                    }
                                    else {
                                        s['color'] = "rgba(0,0,255,1.0)";
                                        s.scheduleType === 'ASSIGNMENT' ? (s['imageurl'] = check_png_1.default) : (s['imageurl'] = '');
                                    }
                                });
                                setEvtState(__spreadArray([], filteringResult.map(function (event) { return (__assign(__assign({}, event), { 'start': event.startDate, 'end': event.endDate })); }), true));
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); })();
    }, [mainFilter, year, month]);
    (0, react_1.useEffect)(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var visitedMonth;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        visitedMonth = "".concat(year, "-").concat(month);
                        if (subFilter === 'ALL')
                            return [2 /*return*/];
                        return [4 /*yield*/, Api.get("/schedule/select/subject?subject=".concat(subFilter, "&month=").concat(visitedMonth)).then(function (res) {
                                var filteringResult = res.data.result;
                                filteringResult.forEach(function (s) {
                                    if (s.schedule === 'SUBJECT') {
                                        var idx = IMPORTANCE.indexOf(s.importance);
                                        s['color'] = "rgba(0,255,0,".concat(ALPHA[idx], ")");
                                        s.scheduleType === 'TASK' ? (s['imageurl'] = check_png_1.default) : (s['imageurl'] = '');
                                    }
                                    else {
                                        s['color'] = "rgba(0,0,255,1.0)";
                                        s.scheduleType === 'ASSIGNMENT' ? (s['imageurl'] = check_png_1.default) : (s['imageurl'] = '');
                                    }
                                });
                                setEvtState(__spreadArray([], filteringResult.map(function (event) { return (__assign(__assign({}, event), { 'start': event.startDate, 'end': event.endDate })); }), true));
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); })();
    }, [subFilter, year, month]);
    var performGetRequest = function (year, month) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                // memo지혜 : 캘린더 일정 GET request 함수
                reloadCalendarEvents(year, month);
                // memo지혜 : 해야 할 일과 완료 한 일에 대한 일정 GET request 함수
                reloadTaskList();
                setMainFilter('ALL');
            }
            catch (error) {
                console.error('Error:', error);
            }
            return [2 /*return*/];
        });
    }); };
    var reloadCalendarEvents = function (year, month) { return __awaiter(void 0, void 0, void 0, function () {
        var visitedMonth, response, _a, commonSchedule, subjectSchedule, officialSchedule, newEventList;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    visitedMonth = "".concat(year, "-").concat(month);
                    return [4 /*yield*/, Api.get("/schedule/common?month=".concat(visitedMonth))];
                case 1:
                    response = _b.sent();
                    _a = response.data.result, commonSchedule = _a.commonSchedule, subjectSchedule = _a.subjectSchedule, officialSchedule = _a.officialSchedule;
                    // memo지혜 : 중요도에 따른 불투명도 설정 및 TASK일 경우 아이콘 부여
                    commonSchedule.forEach(function (s) {
                        var idx = IMPORTANCE.indexOf(s.importance);
                        s['color'] = "rgba(255,0,0,".concat(ALPHA[idx], ")");
                        s.scheduleType === 'TASK' ? (s['imageurl'] = check_png_1.default) : (s['imageurl'] = '');
                    });
                    subjectSchedule.forEach(function (s) {
                        var idx = IMPORTANCE.indexOf(s.importance);
                        s['color'] = "rgba(0,255,0,".concat(ALPHA[idx], ")");
                        s.scheduleType === 'TASK' ? (s['imageurl'] = check_png_1.default) : (s['imageurl'] = '');
                    });
                    officialSchedule.forEach(function (s) {
                        s['color'] = "rgba(0,0,255,1.0)";
                        s.scheduleType === 'ASSIGNMENT' ? (s['imageurl'] = check_png_1.default) : (s['imageurl'] = '');
                    });
                    newEventList = __spreadArray(__spreadArray(__spreadArray([], commonSchedule, true), subjectSchedule, true), officialSchedule, true);
                    setEvtState(__spreadArray([], newEventList.map(function (event) { return (__assign(__assign({}, event), { 'start': event.startDate, 'end': event.endDate })); }), true));
                    return [2 /*return*/];
            }
        });
    }); };
    var reloadTaskList = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Api.get('/schedule/toDoList').then(function (res) {
                        var result = res.data.result;
                        setTaskList(__spreadArray([], result
                            .filter(function (task) { return task.complete === 'FALSE'; })
                            .map(function (el) { return { 'title': el.title, 'dday': el.dday, 'scheduleId': el.scheduleId, 'schedule': el.schedule }; }), true));
                        setCompleteList(__spreadArray([], result
                            .filter(function (task) { return task.complete === 'TRUE'; })
                            .map(function (el) { return { 'title': el.title, 'dday': el.dday, 'scheduleId': el.scheduleId, 'schedule': el.schedule }; }), true));
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    // memo지혜 : 일정등록 모달 toggle 함수
    var handlePostModalToggle = function (type) {
        type === 'personal' ?
            setpostModal(__assign(__assign({}, postModal), { personalPost: !postModal.personalPost }))
            : setpostModal(__assign(__assign({}, postModal), { subjectPost: !postModal.subjectPost }));
    };
    // memo지혜 : 일정상세조회 모달 toggle 함수
    var handleReadModalToggle = function (info) {
        // memo지혜 : 일정에 대한 데이터는 fullcalendar의 일정을 클릭했을 때 해당 일정에 대한 데이터 info로 얻어옴 
        var _def = info.event._def;
        var title = _def.title;
        var className = _def.ui.classNames[0];
        var _a = _def.extendedProps, contents = _a.contents, startDate = _a.startDate, endDate = _a.endDate, scheduleId = _a.scheduleId, importance = _a.importance, schedule = _a.schedule, scheduleType = _a.scheduleType, subjectScheduleType = _a.subjectScheduleType;
        // memo지혜 : 선택된 일정에 대한 아이디 상태관리 for 수정과 삭제 요청시 사용
        setId(scheduleId);
        // memo지혜 : 개인 일정 경우, 일정에 대한 데이터와 모달 상태관리
        if (schedule === 'COMMON') {
            setEvents({ title: title, contents: contents, startDate: startDate, endDate: endDate, importance: importance, schedule: schedule, scheduleType: scheduleType });
            setReadModal(__assign(__assign({}, readModal), { personalRead: !readModal.personalRead }));
        }
        // memo지혜 : 개인 과목일정 또는 공식일정 일 경우, 일정에 대한 데이터와 모달 상태관리
        else {
            setEvents({ title: title, contents: contents, startDate: startDate, endDate: endDate, importance: importance, className: className, subjectScheduleType: subjectScheduleType, schedule: schedule, scheduleType: scheduleType });
            setReadModal(__assign(__assign({}, readModal), { subjectRead: !readModal.subjectRead }));
        }
    };
    // memo지혜 : 캘린더에서 일정이 보이는 뷰를 설정하는 함수
    var eventContent = function (arg) {
        var backgroundColor = arg.backgroundColor;
        var title = arg.event.title;
        var _a = arg.event.extendedProps, imageurl = _a.imageurl, complete = _a.complete, startDate = _a.startDate, endDate = _a.endDate;
        return (<div className='event'>
        {imageurl && <ai_1.AiOutlineDownCircle />}  
        {(0, moment_1.default)(endDate).diff((0, moment_1.default)(startDate), 'days') === 0
                ? <div style={{ display: 'flex' }}><div style={{ borderRadius: '50%', width: '10px', height: '10px', backgroundColor: backgroundColor }}></div><span>{title}</span></div>
                : <span className='event-title' style={{ textDecoration: (complete === 'TRUE' ? 'line-through' : 'none') }}>{title}</span>}      
      </div>);
    };
    // memo지혜: 마우스 클릭시 complete속성을 변경하는 POST request 함수
    var handleComplete = function (scheduleId, schedule) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Api.post("/complete/".concat(scheduleId), schedule).then(function (res) {
                        performGetRequest(year, month);
                        alert('복원완료');
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var openModal = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Api.get("/schedule/".concat(id)).then(function (res) {
                        var _a = res.data.result, title = _a.title, contents = _a.contents, startDate = _a.startDate, endDate = _a.endDate, importance = _a.importance, scheduleType = _a.scheduleType, className = _a.className, subjectScheduleType = _a.subjectScheduleType, schedule = _a.schedule;
                        setId(id);
                        if (schedule === 'COMMON') {
                            setEvents({ title: title, contents: contents, startDate: startDate, endDate: endDate, importance: importance, schedule: schedule, scheduleType: scheduleType });
                            setReadModal(__assign(__assign({}, readModal), { personalRead: !readModal.personalRead }));
                        }
                        else {
                            setEvents({ title: title, contents: contents, startDate: startDate, endDate: endDate, importance: importance, className: className, subjectScheduleType: subjectScheduleType, schedule: schedule, scheduleType: scheduleType });
                            setReadModal(__assign(__assign({}, readModal), { subjectRead: !readModal.subjectRead }));
                        }
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleMainFilter = function () { return __awaiter(void 0, void 0, void 0, function () {
        var mainSelect, scheduleType;
        return __generator(this, function (_a) {
            mainSelect = document.getElementById('mainfilter');
            scheduleType = mainSelect === null || mainSelect === void 0 ? void 0 : mainSelect.options[mainSelect === null || mainSelect === void 0 ? void 0 : mainSelect.selectedIndex].value;
            setMainFilter(scheduleType);
            return [2 /*return*/];
        });
    }); };
    var handleSubFilter = function () { return __awaiter(void 0, void 0, void 0, function () {
        var subSelect, subjectName;
        return __generator(this, function (_a) {
            subSelect = document.getElementById('subfilter');
            subjectName = subSelect === null || subSelect === void 0 ? void 0 : subSelect.options[subSelect === null || subSelect === void 0 ? void 0 : subSelect.selectedIndex].value;
            setSubFilter(subjectName);
            return [2 /*return*/];
        });
    }); };
    return (<>
      {evtState ?
            <Container>
        <Filter>
          {/* 일정 유형별 필터링 하는 기능 */}
          <MainFilter>
            <select name='filter' id='mainfilter' value={mainFilter} onChange={handleMainFilter}>
              <option value='ALL'>--전체보기--</option>
              <option value='SUBJECT'>과목일정보기</option>
              <option value='COMMON'>개인일정보기</option>
            </select>
          </MainFilter>
          <SubFilter>
            {mainFilter === 'SUBJECT' &&
                    <select name='detail-filter' id='subfilter' value={subFilter} onChange={handleSubFilter}>
                <option value='ALL'>--전체보기--</option>
                {subjectList.map(function (subject) { return <option key={(0, uuid_1.v4)()} value={subject}>{subject}</option>; })}
              </select>}
          </SubFilter>
        </Filter>
    
        <CalendarDiv>
          <CalendarBody>
            <react_2.default ref={calendarRef} plugins={[daygrid_1.default, timegrid_1.default, interaction_1.default]} initialView='dayGridMonth' locale={ko_1.default} eventContent={eventContent} customButtons={{
                    nextButton: {
                        text: '>',
                        click: function () {
                            var _a, _b, _c;
                            var calendarApi = (_a = calendarRef.current) === null || _a === void 0 ? void 0 : _a.getApi();
                            var currentDate = calendarApi === null || calendarApi === void 0 ? void 0 : calendarApi.getDate();
                            var currentMonth = (_b = currentDate === null || currentDate === void 0 ? void 0 : currentDate.getMonth()) !== null && _b !== void 0 ? _b : 0;
                            var currentYear = (_c = currentDate === null || currentDate === void 0 ? void 0 : currentDate.getFullYear()) !== null && _c !== void 0 ? _c : 0;
                            var nextDate = currentDate || new Date();
                            var nextMonth = currentMonth + 1;
                            var nextYear = currentYear;
                            var currentView = calendarApi === null || calendarApi === void 0 ? void 0 : calendarApi.view;
                            // memo지혜: 월 이동 
                            if ((currentView === null || currentView === void 0 ? void 0 : currentView.type) === 'dayGridMonth') {
                                calendarApi === null || calendarApi === void 0 ? void 0 : calendarApi.gotoDate(new Date(nextYear, nextMonth));
                            }
                            // memo지혜: 주 이동 
                            else if ((currentView === null || currentView === void 0 ? void 0 : currentView.type) === 'timeGridWeek') {
                                nextDate.setDate(nextDate.getDate() + 7);
                                calendarApi === null || calendarApi === void 0 ? void 0 : calendarApi.gotoDate(nextDate);
                            }
                            // memo지혜: 일 이동 
                            else {
                                nextDate.setDate(nextDate.getDate() + 1);
                                calendarApi === null || calendarApi === void 0 ? void 0 : calendarApi.gotoDate(nextDate);
                            }
                            // memo지혜 : 날짜 이동을 결과 월이 바뀌었다면 month와 year을 업데이트
                            if ((currentView === null || currentView === void 0 ? void 0 : currentView.type) === 'dayGridMonth') {
                                if (nextDate.getMonth() !== nextMonth) {
                                    var new_M = (nextMonth + 1).toString().length === 1 ? "0".concat(nextMonth + 1) : "".concat(nextMonth + 1);
                                    var new_Y = Number(new_M) > 12 ? (nextYear + 1).toString() : nextYear.toString();
                                    if (nextMonth >= 12)
                                        new_M = '01';
                                    setMonth(new_M);
                                    setYear(new_Y);
                                }
                            }
                            else {
                                if (nextDate.getMonth() === nextMonth) {
                                    var new_M = (nextMonth + 1).toString().length === 1 ? "0".concat(nextMonth + 1) : "".concat(nextMonth + 1);
                                    var new_Y = Number(new_M) > 12 ? (nextYear + 1).toString() : nextYear.toString();
                                    if (nextMonth >= 12)
                                        new_M = '01';
                                    setMonth(new_M);
                                    setYear(new_Y);
                                }
                            }
                        },
                    },
                    preButton: {
                        text: '<',
                        click: function () {
                            var _a, _b, _c;
                            var calendarApi = (_a = calendarRef.current) === null || _a === void 0 ? void 0 : _a.getApi();
                            var currentDate = calendarApi === null || calendarApi === void 0 ? void 0 : calendarApi.getDate();
                            var currentMonth = (_b = currentDate === null || currentDate === void 0 ? void 0 : currentDate.getMonth()) !== null && _b !== void 0 ? _b : 0;
                            var currentYear = (_c = currentDate === null || currentDate === void 0 ? void 0 : currentDate.getFullYear()) !== null && _c !== void 0 ? _c : 0;
                            var preDate = currentDate || new Date();
                            var preMonth = currentMonth - 1;
                            var preYear = currentYear;
                            var currentView = calendarApi === null || calendarApi === void 0 ? void 0 : calendarApi.view;
                            if ((currentView === null || currentView === void 0 ? void 0 : currentView.type) === 'dayGridMonth') {
                                calendarApi === null || calendarApi === void 0 ? void 0 : calendarApi.gotoDate(new Date(preYear, preMonth));
                            }
                            else if ((currentView === null || currentView === void 0 ? void 0 : currentView.type) === 'timeGridWeek') {
                                preDate.setDate(preDate.getDate() - 7);
                                calendarApi === null || calendarApi === void 0 ? void 0 : calendarApi.gotoDate(preDate);
                            }
                            else {
                                preDate.setDate(preDate.getDate() - 1);
                                calendarApi === null || calendarApi === void 0 ? void 0 : calendarApi.gotoDate(preDate);
                            }
                            if ((currentView === null || currentView === void 0 ? void 0 : currentView.type) === 'dayGridMonth') {
                                if (preDate.getMonth() !== preMonth) {
                                    var new_Month = (preMonth + 1).toString().length === 1 ? "0".concat(preMonth + 1) : "".concat(preMonth + 1);
                                    var new_Y = Number(new_Month) < 1 ? (preYear - 1).toString() : preYear.toString();
                                    if (preMonth < 0)
                                        new_Month = '12';
                                    setMonth(new_Month);
                                    setYear(new_Y.toString());
                                }
                            }
                            else {
                                if (preDate.getMonth() === preMonth) {
                                    var new_M = (preMonth + 1).toString().length === 1 ? "0".concat(preMonth + 1) : "".concat(preMonth + 1);
                                    var new_Y = Number(new_M) > 12 ? (preYear + 1).toString() : preYear.toString();
                                    if (preMonth >= 12)
                                        new_M = '01';
                                    setMonth(new_M);
                                    setYear(new_Y);
                                }
                            }
                        }
                    }
                }} headerToolbar={{
                    left: 'preButton,nextButton',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }} weekends={true} eventClick={handleReadModalToggle} events={evtState}/>
          </CalendarBody>
          <TaskBody>
            <TodoList>
              <Subheading>해야할 일</Subheading>
              {taskList.length > 0 ?
                    taskList.map(function (el) {
                        var title = el.title, dday = el.dday, scheduleId = el.scheduleId;
                        return <TodoTask key={(0, uuid_1.v4)()} onClick={function () { return openModal(scheduleId); }}>
                    <TaskIconConatiner><ai_1.AiOutlineBorder /></TaskIconConatiner>
                    <TaskTitle>{title}</TaskTitle>
                    <Dday><span>D{dday}</span></Dday>
                  </TodoTask>;
                    })
                    : <p>해야할 일이 없습니다.</p>}
            </TodoList>

            <CompleteList>
              <Subheading>완료한 일</Subheading>
              {completeList.length > 0 ?
                    completeList.map(function (el) {
                        var title = el.title, scheduleId = el.scheduleId, schedule = el.schedule;
                        return (<TodoTask key={(0, uuid_1.v4)()}>
                      <TaskIconConatiner><ai_1.AiOutlineCheckSquare /></TaskIconConatiner>
                      <CompleteTitle>{title}</CompleteTitle>
                      <RestoreBtn onClick={function () { return handleComplete(scheduleId, schedule); }}>복원하기</RestoreBtn>
                    </TodoTask>);
                    })
                    : <p>완료한 일이 없습니다.</p>}
            </CompleteList>
          </TaskBody>
        </CalendarDiv>

        {/* memo지혜 : 일정등록모달 */}
        {postModal.personalPost &&
                    <PersonalScheduleAdd_1.default handleModalToggle={handlePostModalToggle} getApi={performGetRequest} date={[month, year]}/>}
        {postModal.subjectPost &&
                    <SubjectScheduleAdd_1.default handleModalToggle={handlePostModalToggle} getApi={performGetRequest} date={[month, year]} subjectList={subjectList}/>}

        {/* memo지혜 : 일정상세보기모달 */}
        {readModal.personalRead &&
                    <PersonalScheduleDetail_1.default handleModalToggle={function () { return setReadModal(__assign(__assign({}, readModal), { personalRead: !readModal.personalRead })); }} getApi={performGetRequest} id={id} date={[month, year]} event={evt}/>}
        {readModal.subjectRead &&
                    <SubjectDetail_1.default handleModalToggle={function () { return setReadModal(__assign(__assign({}, readModal), { subjectRead: !readModal.subjectRead })); }} getApi={performGetRequest} id={id} date={[month, year]} event={evt} subjectList={subjectList}/>}

        {/* memo지혜 : 일정등록버튼 */}
        <PostBtns>
          <PostBtn type='button' btnName='subject' onClick={function (e) { return handlePostModalToggle('subject'); }}>과목일정등록하기</PostBtn>
          <PostBtn type='button' btnName='personal' onClick={function (e) { return handlePostModalToggle('personal'); }}>개인일정등록하기</PostBtn>
        </PostBtns>
        </Container>
            : <h1>Loading</h1>}
      </>);
};
exports.default = Calendar;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20;
