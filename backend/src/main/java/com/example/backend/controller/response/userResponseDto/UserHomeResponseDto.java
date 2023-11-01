package com.example.backend.controller.response.userResponseDto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class UserHomeResponseDto {
    private String userName;
    private String schoolNumber;
    private String userType;
    private List<UserSubjectsResponseDto> Subjects;
    private List<UserScheduleResponseDto> Schedule;

}
