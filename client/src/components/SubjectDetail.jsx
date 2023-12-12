import Api from "./api";
import styled from 'styled-components';
import { AiFillCloseCircle } from 'react-icons/ai';
// "use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var ai_1 = require("react-icons/ai");
var react_router_dom_1 = require("react-router-dom");
var styled_components_1 = require("styled-components");
var uuid_1 = require("uuid");
// var Api = require("./api");

const ModalConatiner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index : 999;
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
const CloseButton = styled(AiFillCloseCircle)`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
`;
const CompleteButton = styled.button`
  display: block;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  text-align: center; 
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  margin : auto;
  background-color: #228be6;
  width: 22rem;
  height: 2rem;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 0.8fr;
  grid-gap: 0.5rem;
  justify-content : left;
  text-align: left;
  font-size: 13px;
  width: 80%;
  margin: auto;
  padding: 2rem 2rem;
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
const EclassBtn = styled.button`
  display: block;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  text-align: center; 
  cursor: pointer;
  background-color: #228be6;
  width: 100%;
  height: 2rem;
`;
const EditButton = styled.button`
  display: block;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  text-align: center; 
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-right : auto;
  background-color: #228be6;
  width: 10rem;
  height: 2rem;
`;
const CDButton = styled.button`
  display: block;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  text-align: center; 
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left : auto;
  background-color: #228be6;
  width: 10rem;
  height: 2rem;
`;
const ButtonLine = styled.div`
  display: flex;
  padding-top: 0.5rem;
  justify-content: space-between;
`;
const ButtonWapper = styled.div`
  margin: 0 auto;
  padding-bottom: 0.5rem;
  width: 22rem;
`;
const Heading = styled.h1`
  margin-bottom: 0.2rem;`
;
// memo정민: 캘린더 과목 일정 상세보기
var SubjectDetail = function (_a) {
    var handleModalToggle = _a.handleModalToggle, getApi = _a.getApi, date = _a.date, subjectList = _a.subjectList, event = _a.event, id = _a.id;
    var navigate = (0, react_router_dom_1.useNavigate)();
    var formData = __assign({}, event);
    // memo정민: 수정 모드 여부를 관리하는 상태
    var _b = (0, react_1.useState)(false), edited = _b[0], setEdited = _b[1];
    // memo정민: 수정 버튼 클릭 시 수정 모드 변경
    var onClickEditButton = function (event) {
        event.preventDefault();
        setEdited(true);
    };
    // memo정민: 취소 버튼 클릭 시 수정 모드 변경
    var onClickReadButton = function () {
        setEdited(false);
        reset(__assign({}, formData));
    };
    // memo정민: react-hook-form을 사용하여 폼 상태를 관리
    var _c = (0, react_hook_form_1.useForm)({ mode: 'onBlur' }), register = _c.register, handleSubmit = _c.handleSubmit, reset = _c.reset, control = _c.control;
    // memo정민: react-hook-form을 사용한 폼 제출 핸들러 정의
    var onSubmit = function (data) { return putSchedule(data); };
    var putSchedule = function (_a) {
        var title = _a.title, contents = _a.contents, scheduleType = _a.scheduleType, className = _a.className, importance = _a.importance, subjectScheduleType = _a.subjectScheduleType, startDate = _a.startDate, endDate = _a.endDate;
        return __awaiter(void 0, void 0, void 0, function () {
            var putData, _b, e_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 4, , 5]);
                        putData = { title: title, contents: contents, scheduleType: scheduleType, className: className, importance: importance, subjectScheduleType: subjectScheduleType, startDate: startDate, endDate: endDate };
                        if (!(startDate < endDate)) return [3 /*break*/, 2];
                        return [4 /*yield*/, Api.put("schedule/subject/".concat(id), putData).then(function (res) {
                                alert('정상적으로 일정이 수정되었습니다.');
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
                        handleModalToggle('subject');
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
    var delSchedule = function () { return __awaiter(void 0, void 0, void 0, function () {
        var yes;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    yes = window.confirm('삭제하시겠습니까?');
                    if (!yes) return [3 /*break*/, 2];
                    return [4 /*yield*/, Api.delete("/schedule/subject/".concat(id)).then(function (res) {
                            handleModalToggle('subject');
                            if (date) {
                                var month = date[0], year = date[1];
                                getApi === null || getApi === void 0 ? void 0 : getApi(year, month);
                            }
                        })];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var moveToElass = function (e) {
        var subjectId = e.target.value;
        var subjectName = e.target.getAttribute('data-subject-name');
        navigate("/eclass/".concat(subjectId), { state: { subjectId: subjectId, subjectName: subjectName } });
    };
    var IsOfficial = function () {
        return formData.schedule === 'OFFICIAL_SUBJECT';
    };
    var completeSchedule = function () { return __awaiter(void 0, void 0, void 0, function () {
        var schedule;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    schedule = formData.schedule;
                    return [4 /*yield*/, Api.post("/complete/".concat(id), schedule).then(function (res) {
                            handleModalToggle('personal');
                            if (date) {
                                var month = date[0], year = date[1];
                                getApi === null || getApi === void 0 ? void 0 : getApi(year, month);
                            }
                            alert('일정완료');
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    return (<ModalConatiner>      
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Heading>{IsOfficial() ? '공식일정 상세보기' : '과목일정 상세보기'}</Heading>
        <CloseButton onClick={function () { return handleModalToggle('subject'); }}/>
        <Grid>
        <label htmlFor='title'>제목</label>
        <InputDiv>
          <react_hook_form_1.Controller control={control} name='title' defaultValue={formData.title} rules={{ required: true }} render={function (_a) {
            var field = _a.field;
            return (<StyledInput id='title' type='text' value={field.value} placeholder='제목을 입력해주세요.' {...register('title', { required: true })} readOnly={!edited}/>);
        }}/>
        </InputDiv>
        {!IsOfficial() && <>
        <label htmlFor='scheduleType'>유형</label>
        <InputDiv>
          <react_hook_form_1.Controller control={control} name='scheduleType' defaultValue={formData.scheduleType} rules={{ required: true }} render={function (_a) {
                var field = _a.field;
                return (<StyledSelect id='scheduleType' value={field.value} placeholder='제목을 입력해주세요.' {...register('scheduleType', { required: true })} disabled={!edited}>
              <option value='TASK'>TASK</option>
              <option value='SCHEDULE'>SCHEDULE</option>
            </StyledSelect>);
            }}/>
        </InputDiv>
        </>}
        <label htmlFor='contents'>상세내용</label>
        <InputDiv>
          <react_hook_form_1.Controller control={control} name='contents' defaultValue={formData.contents} rules={{ required: true }} render={function (_a) {
            var field = _a.field;
            return (<StyledTextarea id='contents' placeholder='상세내용을 입력해주세요.' value={field.value} readOnly={!edited} {...register('contents', { required: true })}/>);
        }}/>
        </InputDiv>
        <label htmlFor='className'>과목명</label>
        <InputDiv>
          <react_hook_form_1.Controller control={control} name='className' defaultValue={formData.className} rules={{ required: true }} render={function (_a) {
            var field = _a.field;
            return (<StyledSelect id='className' value={field.value} {...register('className', { required: true })} disabled={!edited}>
                {subjectList === null || subjectList === void 0 ? void 0 : subjectList.map(function (el) { return <option key={(0, uuid_1.v4)()} value={el}>{el}</option>; })}
              </StyledSelect>);
        }}/> 
        </InputDiv>
        <label htmlFor='subjectScheduleType'>일정 종류</label>
        <InputDiv>
          <react_hook_form_1.Controller control={control} name='subjectScheduleType' defaultValue={formData.subjectScheduleType} rules={{ required: true }} render={function (_a) {
            var field = _a.field;
            return (<StyledSelect id='subjectScheduleType' value={field.value} {...register('subjectScheduleType', { required: true })} disabled={!edited}>
                  <option value='ASSIGNMENT'>ASSIGNMENT</option>
                  <option value='PRESENTATION'>PRESENTATION</option>
                  <option value='TEST'>TEST</option>
                </StyledSelect>);
        }}/>
        </InputDiv>
        {!IsOfficial() &&
            <>
        <label htmlFor='importance'>중요도</label>
        <InputDiv>
          <react_hook_form_1.Controller control={control} name='importance' defaultValue={formData.importance} rules={{ required: true }} render={function (_a) {
                    var field = _a.field;
                    return (<StyledSelect id='importance' value={field.value} {...register('importance', { required: true })} disabled={!edited}>
                  <option value='EASYGOING'>EASYGOING</option>
                  <option value='NORMAL'>NORMAL</option>
                  <option value='IMPORTANT'>IMPORTANT</option>
                </StyledSelect>);
                }}/>
        </InputDiv>
        </>}
        <label>시작 날짜</label>
        <react_hook_form_1.Controller control={control} name='startDate' defaultValue={formData.startDate} rules={{ required: true }} render={function (_a) {
            var field = _a.field;
            return (<InputDiv>
              <input onChange={field.onChange} onBlur={field.onBlur} value={field.value} type='datetime-local' readOnly={!edited}/>
              </InputDiv>);
        }}/>
        <label>마감 날짜</label>
        <react_hook_form_1.Controller control={control} name='endDate' defaultValue={formData.endDate} rules={{ required: true }} render={function (_a) {
            var field = _a.field;
            return (<InputDiv>
              <input onChange={field.onChange} onBlur={field.onBlur} value={field.value} type='datetime-local' readOnly={!edited}/>
              </InputDiv>);
        }}/>
        </Grid>
        {edited ? (<ButtonWapper>      
            <ButtonLine>
              <EditButton type='submit'>수정완료</EditButton>
              <CDButton type='button' onClick={onClickReadButton}>취소하기</CDButton>
            </ButtonLine>            
          </ButtonWapper>) : (<>
          {IsOfficial() ?
                <ButtonWapper> 
              <EclassBtn onClick={moveToElass} value={id} data-subject-name={formData.className}>이클래스가기</EclassBtn>
            </ButtonWapper>
                :
                    <ButtonWapper> 
              {formData.scheduleType === 'TASK' && <CompleteButton type='button' onClick={completeSchedule}>일정 완료하기</CompleteButton>}
              <ButtonLine> 
                <EditButton type='button' onClick={onClickEditButton}>수정하기</EditButton>
                <CDButton type='button' onClick={delSchedule}>삭제하기</CDButton>
              </ButtonLine>
            </ButtonWapper>}
          </>)}
      </Form>
    </ModalConatiner>);
};
// exports.default = SubjectDetail;
export default SubjectDetail;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15;
