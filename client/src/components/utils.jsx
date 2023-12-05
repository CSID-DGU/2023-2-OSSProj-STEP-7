"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLogin = exports.logout = exports.getUserType = exports.getToken = void 0;
// memo지혜 : 토큰유무를 확인하는 함수
var getToken = function () {
    return localStorage.getItem('token');
};
exports.getToken = getToken;
// memo지혜 : 토큰유무를 확인하는 함수
var getUserType = function () {
    return localStorage.getItem('userType');
};
exports.getUserType = getUserType;
// memo지혜 : 로그아웃 함수
var logout = function () {
    localStorage.clear();
    alert('로그아웃 되었습니다.');
    if (window.location.pathname === '/calendar')
        window.location.href = '/';
};
exports.logout = logout;


// memo지혜 : 로그인유무를 확인하는 함수
var isLogin = function () {
    var token = (0, exports.getToken)();
    return token ? true : false;
};

exports.isLogin = isLogin;

// export {logout, isLogin}