import Api from "./api";
import styled from 'styled-components';
import { AiFillCloseCircle as CloseIcon } from 'react-icons/ai';
// import { AiFillCloseCircle } from 'react-icons/ai';

// "use strict";
// var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
//     if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
//     return cooked;
// };
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_hook_form_1 = require("react-hook-form");
var ai_1 = require("react-icons/ai");
var styled_components_1 = require("styled-components");
var SubmitButton_1 = require("./SubmitButton");
// var Api = require("./api");
// import styled from 'styled-components';
// import { AiFillCloseCircle as CloseIcon } from 'react-icons/ai';

const CloseButton = styled(CloseIcon)`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;

const StyledSelect = styled.select`
  width: 100%;
  height: 35px;
  font-size: 13px;
  border-radius: 5px;
  border: 1px solid #666;
  padding: 0 12px;
`;

const StyledInput = styled.input`
  width: 91%;
  height: 35px;
  font-size: 13px;
  border: 1px solid #666;
  border-radius: 5px;
  padding: 0 12px;
`;

const StyledTextarea = styled.textarea`
  width: 91%;
  height: 200px;
  font-size: 13px;
  border: 1px solid #666;
  border-radius: 5px;
  padding: 10px 12px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 0.8fr;
  grid-gap: 0.5rem;
  justify-content: left;
  text-align: left;
  font-size: 13px;
  width: 80%;
  margin: 2rem auto;
  padding: 1rem 1rem;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const Form = styled.form`
  position: absolute;
  width: 25%;
  min-width: 385px;
  padding: 30px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
`;

var SubjectScheduleAdd = function (_a) {
    var handleModalToggle = _a.handleModalToggle, getApi = _a.getApi, date = _a.date, subjectList = _a.subjectList;
    var _b = (0, react_hook_form_1.useForm)({ mode: 'onBlur' }), register = _b.register, handleSubmit = _b.handleSubmit;
    var onSubmit = function (data) { return postSchedule(data); };
    var postSchedule = function (_a) {
        var title = _a.title, contents = _a.contents, scheduleType = _a.scheduleType, className = _a.className, importance = _a.importance, subjectScheduleType = _a.subjectScheduleType, startDate = _a.startDate, endDate = _a.endDate;
        return __awaiter(void 0, void 0, void 0, function () {
            var postData, _b, e_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 4, , 5]);
                        postData = { title: title, contents: contents, scheduleType: scheduleType, className: className, importance: importance, subjectScheduleType: subjectScheduleType, startDate: startDate, endDate: endDate };
                        if (!(startDate < endDate)) return [3 /*break*/, 2];
                        return [4 /*yield*/, Api.post("/schedule/subject", postData).then(function (res) {
                                alert('정상적으로 일정이 등록되었습니다.');
                                handleModalToggle('subject');
                                if (date) {
                                    var month = date[0], year = date[1];
                                    getApi === null || getApi === void 0 ? void 0 : getApi(year, month);
                                }
                            })];
                    case 1:
                        _b = _c.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _b = alert('마감날짜를 다시 설정해주세요.');
                        _c.label = 3;
                    case 3:
                        // _b;
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _c.sent();
                        alert(e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return (<ModalContainer>

    <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>과목 일정 등록</h1>
        <CloseButton onClick={function () { return handleModalToggle('subject'); }}/>
        <Grid>
        <label htmlFor='title'>제목</label>
        <InputDiv>
          <StyledInput id='title' type='text' placeholder='제목을 입력해주세요.' {...register('title', { required: true })}/>
        </InputDiv>
        <label htmlFor='scheduleType'>유형</label>
        <InputDiv>
          <StyledSelect id='scheduleType' {...register('scheduleType', { required: true })}>
            <option value='TASK'>TASK</option>
            <option value='SCHEDULE'>SCHEDULE</option>
          </StyledSelect>
        </InputDiv>
        <label htmlFor='contents'>상세내용</label>
        <InputDiv>
          <StyledTextarea id='contents' placeholder='상세내용을 입력해주세요.' {...register('contents', { required: true })}/>
        </InputDiv>
        <label htmlFor='className'>과목명</label>
        <InputDiv>
          <StyledSelect id='className' {...register('className', { required: true })}>
            {subjectList === null || subjectList === void 0 ? void 0 : subjectList.map(function (el) { return <option key={el} value={el}>{el}</option>; })}
          </StyledSelect>
        </InputDiv>
        <label htmlFor='subjectScheduleType'>일정 종류</label>
        <InputDiv>
          <StyledSelect id='subjectScheduleType' {...register('subjectScheduleType', { required: true })}>
            <option value='ASSIGNMENT'>ASSIGNMENT</option>
            <option value='TEST'>TEST</option>
            <option value='PRESENTATION'>PRESENTATION</option>
          </StyledSelect>
        </InputDiv>
        <label htmlFor='importance'>중요도</label>
        <InputDiv>
          <StyledSelect id='importance' {...register('importance', { required: true })}>
            <option value='EASYGOING'>EASYGOING</option>
            <option value='NORMAL'>NORMAL</option>
            <option value='IMPORTANT'>IMPORTANT</option>
          </StyledSelect>
        </InputDiv>
        <label htmlFor='startDate'>시작 날짜</label>
        <InputDiv>
          <input type='datetime-local' {...register('startDate', { required: true })}></input>
        </InputDiv>
        <label htmlFor='endDate'>마감 날짜</label>
        <InputDiv>
          <input type='datetime-local' {...register('endDate', { required: true })}></input>
        </InputDiv>
        </Grid>
        <SubmitButton_1.default name='등록하기' width='15rem' height='3rem' color='#228be6'/>
    </Form>
    </ModalContainer>);
};
// exports.default = SubjectScheduleAdd;
export default SubjectScheduleAdd;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20;
