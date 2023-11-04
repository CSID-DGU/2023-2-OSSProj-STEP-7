package com.example.backend.service;

import com.example.backend.controller.request.UserJoinRequestDto;
import com.example.backend.controller.response.UserHomeResponseDto;
import com.example.backend.controller.response.UserJoinResponseDto;
import com.example.backend.controller.response.UserLoginResponseDto;
import com.example.backend.entity.UserEntity;
import com.example.backend.exception.ErrorCode;
import com.example.backend.exception.Exception;
import com.example.backend.model.UserType;
import com.example.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder encoder;

    public UserJoinResponseDto join(UserJoinRequestDto requestDto) {
        userRepository.findByUserID(requestDto.getUserID())
                .ifPresent(user -> {
                    throw new Exception(ErrorCode.DUPLICATED_CODE, String.format("이미 존재하는 학번 정보입니다. (%s)", user.getUserID()));
                });

        UserEntity user = UserEntity.saveUser(
                requestDto.getUserID(),
                encoder.encode(requestDto.getUserPwd()),
                requestDto.getUserName(),
                UserType.returnUserType(requestDto.getUserType()));

        UserJoinResponseDto result;
        result = UserJoinResponseDto.toUserJoinResponse(userRepository.save(user));

        return result;
    }

    public UserLoginResponseDto login(String userID, String userPwd) {

        UserEntity user = userRepository
                .findByUserID(userID)
                .orElseThrow(()-> new Exception(ErrorCode.INVALID_LOGIN));

        if(!encoder.matches(userPwd, user.getUserPwd())) {
            throw new Exception (ErrorCode.INVALID_LOGIN);
        }

        return new UserLoginResponseDto(user.getUserName(), user.getUserID(), user.getUserType().name());
    }

    public UserHomeResponseDto getHome(String userID) {
        UserEntity user = userRepository
                .findByUserID(userID)
                .orElseThrow(()-> new Exception(ErrorCode.INVALID_LOGIN));

        return new UserHomeResponseDto(user.getUserName(), user.getUserID(), user.getUserType().name());
    }
}