package com.example.backend.controller.response;

import com.example.backend.entity.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class UserJoinResponseDto {

    private String userID;
    private String userName;
    private String userType;

    public static UserJoinResponseDto toUserJoinResponse(UserEntity user) {
        return new UserJoinResponseDto(
                user.getUserID(),
                user.getUserName(),
                user.getUserType().name()
        );
    }
}