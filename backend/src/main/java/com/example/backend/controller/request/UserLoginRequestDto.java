package com.example.backend.controller.request;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class UserLoginRequestDto {

    private String userNum;
    private String userPwd;
}