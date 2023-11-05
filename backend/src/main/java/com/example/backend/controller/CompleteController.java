package com.example.backend.controller;

import com.example.backend.controller.request.CompleteRequestDto;
import com.example.backend.controller.response.Response;
import com.example.backend.service.CompleteService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * 각 스케쥴 별 완료 기능을 위한 api
 */

@RestController
@RequiredArgsConstructor
public class CompleteController {
    private final CompleteService completeService;

    @PostMapping("/complete/{scheduleId}")
    public Response<Void> complete(@PathVariable Long scheduleId, Authentication authentication, @RequestBody CompleteRequestDto reqeustDto){
        completeService.complete(scheduleId, authentication.getName(), reqeustDto.getSchedule());
        return Response.success();
    }

}