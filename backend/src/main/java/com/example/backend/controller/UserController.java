package com.example.backend.controller;

import com.example.backend.controller.request.UserJoinRequestDto;
import com.example.backend.controller.request.UserLoginRequestDto;
import com.example.backend.controller.response.Response;
import com.example.backend.controller.response.userResponseDto.UserHomeResponseDto;
import com.example.backend.controller.response.userResponseDto.UserJoinResponseDto;
import com.example.backend.controller.response.userResponseDto.UserLoginResponseDto;
import com.example.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * 유저 관련 api
 */

@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping("/signup")
    public Response<UserJoinResponseDto> join(@RequestBody UserJoinRequestDto requestDto){
        return Response.success(userService.join(requestDto));
    }

    @PostMapping("/login")
    public Response<UserLoginResponseDto> login(@RequestBody UserLoginRequestDto requestDto){
        return Response.success(userService.login(requestDto.getSchoolNumber(), requestDto.getPassword()));
    }

    @GetMapping("/home")
    public Response<UserHomeResponseDto> home(Authentication authentication){
        return Response.success(userService.getHome(authentication.getName()));
    }
}
