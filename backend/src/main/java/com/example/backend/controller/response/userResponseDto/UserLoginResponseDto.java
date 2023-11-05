package com.example.backend.controller.response.userResponseDto;

import lombok.AllArgsConstructor;
import lombok.Getter;


@Getter
@AllArgsConstructor
public class UserLoginResponseDto {
    private String token;
    private String userName;
    private String schoolNumber;
    private String userType;

}
