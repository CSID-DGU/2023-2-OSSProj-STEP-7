
const Atom= (props) => {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventState = exports.userInfoState = exports.isLoginCheck = void 0;
var recoil = require("recoil");
var recoil_persist = require("recoil-persist");
var utils = require("./utils");
var persistAtom = (0, recoil_persist.recoilPersist)().persistAtom;
// memo지혜 : 로그인상태 전역관리
exports.isLoginCheck = (0, recoil.atom)({
    key: 'isLogin',
    default: (0, utils.isLogin)(),
    effects_UNSTABLE: [persistAtom]
});
// memo지혜 : 유저정보를 전역관리
exports.userInfoState = (0, recoil.atom)({
    key: 'userInfoState',
    default: {
        userName: null,
        schoolNumber: null,
        userType: null
    },
    effects_UNSTABLE: [persistAtom]
});
// memo지혜 : 일정목록을 전역관리
exports.EventState = (0, recoil.atom)({
    key: 'evtState',
    default: [],
    effects_UNSTABLE: [persistAtom]
});
}

exports.default = Atom ;