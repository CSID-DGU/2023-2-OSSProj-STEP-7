package com.example.backend.controller.request;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@AllArgsConstructor
@Getter
public class SubjectScheduleRequestDto {
    private String title;
    private String contents;
    private String className;
    private String importance;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private String subjectScheduleType;
    private String scheduleType;

}