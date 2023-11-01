package com.example.backend.controller.response.userResponseDto;

import com.example.backend.model.UserSubject;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class UserSubjectsResponseDto {
    private Long subjectId;
    private String subjectName;

    public static UserSubjectsResponseDto fromUserSubject(UserSubject userSubject){
        return new UserSubjectsResponseDto(
                userSubject.getId(),
                userSubject.getSubject().getSubjectName());
    }
}