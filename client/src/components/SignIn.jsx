"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });

var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var react_router_dom_1 = require("react-router-dom");
var styled_components_1 = require("styled-components");
var utils_1 = require("../utils/utils");
var Api = require("../lib/Api");
var recoil_1 = require("recoil");
var Atom_1 = require("recoil/Atom");
var axios_1 = require("axios");
var InputForm = styled_components_1.default.form(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
var InputWapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n"], ["\n  display: flex;\n"])));
var InputLine = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-right: 10px;\n"], ["\n  margin-right: 10px;\n"])));
var IdInput = styled_components_1.default.input(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  height: 34px;\n  width: 170px;\n  padding-left: 10px;\n  border: 1px solid #666;\n  border-radius: 2px;\n  font-size: 13px;\n"], ["\n  height: 34px;\n  width: 170px;\n  padding-left: 10px;\n  border: 1px solid #666;\n  border-radius: 2px;\n  font-size: 13px;\n"])));
var PasswordInput = styled_components_1.default.input(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  height: 34px;\n  width: 170px;\n  padding-left: 10px;\n  border: 1px solid #666;\n  border-radius: 2px;\n  font-size: 13px;\n"], ["\n  height: 34px;\n  width: 170px;\n  padding-left: 10px;\n  border: 1px solid #666;\n  border-radius: 2px;\n  font-size: 13px;\n"])));
var SignInButton = styled_components_1.default.button(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin-right: 20px;\n  height: 34px;\n  width: 72px;\n  text-align: center;\n  color: #fff;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 3px;\n  background-color: #e72f4b;\n  cursor: pointer;\n"], ["\n  margin-right: 20px;\n  height: 34px;\n  width: 72px;\n  text-align: center;\n  color: #fff;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 3px;\n  background-color: #e72f4b;\n  cursor: pointer;\n"])));
var SignUpButton = (0, styled_components_1.default)(react_router_dom_1.Link)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  margin 33px 0;\n  text-align: center;\n  color: #fff;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 2px;\n  background-color: #666;\n  font-size: 12px;\n  cursor: pointer;\n"], ["\n  margin 33px 0;\n  text-align: center;\n  color: #fff;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 2px;\n  background-color: #666;\n  font-size: 12px;\n  cursor: pointer;\n"])));
var LogoutWapper = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display:flex;\n  align-items: center;\n  padding-left: 20px;\n  font-size: 15px;\n  font-weight: bold;\n"], ["\n  display:flex;\n  align-items: center;\n  padding-left: 20px;\n  font-size: 15px;\n  font-weight: bold;\n"])));
var LogoutButton = styled_components_1.default.button(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  margin: 0 20px;\n  height: 34px;\n  width: 80px;\n  text-align: center;\n  color: #fff;\n  padding: 7px 5px;\n  border: none;\n  border-radius: 3px;\n  background-color: #286090;\n  cursor: pointer;\n"], ["\n  margin: 0 20px;\n  height: 34px;\n  width: 80px;\n  text-align: center;\n  color: #fff;\n  padding: 7px 5px;\n  border: none;\n  border-radius: 3px;\n  background-color: #286090;\n  cursor: pointer;\n"])));
var SignIn = function () {
    var navigate = (0, react_router_dom_1.useNavigate)();
    var _a = (0, recoil_1.useRecoilState)(Atom_1.isLoginCheck), loginCheck = _a[0], setLoginCheck = _a[1];
    var _b = (0, recoil_1.useRecoilState)(Atom_1.userInfoState), userInfo = _b[0], setUserInfo = _b[1];
    var _c = (0, react_1.useState)(''), loginMessage = _c[0], setLoginMessage = _c[1];
    (0, react_1.useEffect)(function () {
        setLoginMessage("".concat(userInfo.schoolNumber, "(").concat(userInfo.userName, ")"));
    }, [loginCheck]);
    // memo정민: react-hook-form을 사용하여 폼 상태를 관리
    var _d = (0, react_hook_form_1.useForm)({ mode: 'onBlur' }), register = _d.register, handleSubmit = _d.handleSubmit, isSubmitting = _d.formState.isSubmitting, reset = _d.reset;
    // memo정민: react-hook-form을 사용한 폼 제출 핸들러 정의
    var onSubmit = function (data) { return login(data); };
    var login = function (_a) {
        var schoolNumber = _a.schoolNumber, password = _a.password;
        return __awaiter(void 0, void 0, void 0, function () {
            var loginData, e_1;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        loginData = { schoolNumber: schoolNumber, password: password };
                        return [4 /*yield*/, Api.post("/login", loginData).then(function (res) {
                                var _a = res.data.result, schoolNumber = _a.schoolNumber, userName = _a.userName, userType = _a.userType, token = _a.token, schedule = _a.schedule, subjects = _a.subjects;
                                localStorage.setItem('token', token);
                                localStorage.setItem('userType', userType);
                                setLoginCheck(!loginCheck);
                                setUserInfo({ schoolNumber: schoolNumber, userName: userName, userType: userType });
                                alert("".concat(schoolNumber, "(").concat(userName, ")\uB2D8 \uB85C\uADF8\uC778 \uB418\uC5C8\uC2B5\uB2C8\uB2E4."));
                                navigate('/');
                            })];
                    case 1:
                        _c.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _c.sent();
                        if (axios_1.default.isAxiosError(e_1)) {
                            console.log(e_1.response);
                            alert((_b = e_1.response) === null || _b === void 0 ? void 0 : _b.data);
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    var LogoutHandler = function () {
        (0, utils_1.logout)();
        setLoginCheck(!loginCheck);
        setUserInfo({ schoolNumber: null, userName: null, userType: null });
        reset();
        navigate('/');
    };
    return (<>
    {!loginCheck ?
            <InputForm onSubmit={handleSubmit(onSubmit)}>
        <InputWapper>
          <InputLine>
            <IdInput type='text' placeholder='아이디' {...register('schoolNumber', { required: true })}/>
          </InputLine>
          <InputLine>
            <PasswordInput type='password' placeholder='비밀번호' {...register('password', { required: true })}/>
          </InputLine>
        </InputWapper>
        <SignInButton type='submit' disabled={isSubmitting}>로그인</SignInButton>
        <SignUpButton to='/signup'>회원가입</SignUpButton>
    </InputForm>
            : <LogoutWapper>{loginMessage}님<LogoutButton onClick={LogoutHandler}>로그아웃</LogoutButton></LogoutWapper>}
    </>);
};
exports.default = SignIn;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
