package com.example.backend.controller;

import com.example.backend.controller.request.UserJoinRequestDto;
import com.example.backend.controller.request.UserLoginRequestDto;
import com.example.backend.controller.response.Response;
import com.example.backend.controller.response.UserHomeResponseDto;
import com.example.backend.controller.response.UserJoinResponseDto;
import com.example.backend.controller.response.UserLoginResponseDto;
import com.example.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
@RequiredArgsConstructor
public class UserController {

    @Autowired
    private final UserService userService;

    @PostMapping("/signup")
    public Response<UserJoinResponseDto> join(@RequestBody UserJoinRequestDto requestDto) {
        return Response.success(userService.join(requestDto));
    }

    @PostMapping("/login")
    public Response<UserLoginResponseDto> login(@RequestBody UserLoginRequestDto requestDto) {
        return Response.success(userService.login(requestDto.getUserID(), requestDto.getUserPwd()));
    }

    @GetMapping("/home")
    public Response<UserHomeResponseDto> home(Authentication authentication) {
        return Response.success(userService.getHome(authentication.name()));
    }

}