// import { atom } from 'recoil';
// import { utils } from './utils'; // utils



// const Atom= (props) => {

// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// exports.EventState = exports.userInfoState = exports.isLoginCheck = void 0;
// var recoil = require("recoil");
// var recoil_persist = require("recoil-persist");
// var utils = require("./utils");
// var persistAtom = (0, recoil_persist.recoilPersist)().persistAtom;


// // memo지혜 : 로그인상태 전역관리
// // exports.isLoginCheck = (0, recoil.atom)({
// //     key: 'isLogin',
// //     default: (0, utils.isLogin)(),
// //     effects_UNSTABLE: [persistAtom]
// // });

// exports.isLoginCheck = atom({
//     key: 'isLogin',
//     default: utils.isLogin(),
//     effects_UNSTABLE: [persistAtom],
//   });

  
// // memo지혜 : 유저정보를 전역관리
// exports.userInfoState = (0, recoil.atom)({
//     key: 'userInfoState',
//     default: {
//         userName: null,
//         schoolNumber: null,
//         userType: null
//     },
//     effects_UNSTABLE: [persistAtom]
// });


// // memo지혜 : 일정목록을 전역관리
// exports.EventState = (0, recoil.atom)({
//     key: 'evtState',
//     default: [],
//     effects_UNSTABLE: [persistAtom]
// });
// }

// exports.default= atom ; 

// // export { isLoginCheck, userInfoState, EventState };
import React from 'react';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { isLogin } from './utils';

const persistAtom = recoilPersist().persistAtom;

// 메모: 로그인 상태 전역 관리
export const isLoginCheck = atom({
  key: 'isLogin',
  default: isLogin(),
  effects_UNSTABLE: [persistAtom]
});

// 메모: 유저 정보 전역 관리
export const userInfoState = atom({
  key: 'userInfoState',
  default: {
    userName: null,
    schoolNumber: null,
    userType: null
  },
  effects_UNSTABLE: [persistAtom]
});

// 메모: 일정 목록 전역 관리
export const EventState = atom({
  key: 'evtState',
  default: [],
  effects_UNSTABLE: [persistAtom]
});
