package com.example.backend.controller.request;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class UserLoginRequestDto {

    private String schoolNumber;
    private String password;
}
