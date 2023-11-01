package com.example.backend.controller.response.userResponseDto;

import com.example.backend.model.CommonScheduleEntity;
import com.example.backend.model.OfficialSubjectScheduleEntity;
import com.example.backend.model.SubjectScheduleEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.persistence.DiscriminatorValue;
import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
public class UserScheduleResponseDto {
    private Long scheduleId;
    private String title;
    private LocalDateTime scheduleTime;
    private String schedule;
    private String scheduleType;
    private String className;

    private int dDay;

    public static UserScheduleResponseDto fromCommonSchedule(CommonScheduleEntity schedule) {
        return new UserScheduleResponseDto(
                schedule.getId(),
                schedule.getTitle(),
                schedule.getStartDate(),
                CommonScheduleEntity.class.getAnnotation(DiscriminatorValue.class).value(),
                schedule.getScheduleType().name(),
                "",
                LocalDateTime.now().getDayOfYear() - schedule.getEndDate().getDayOfYear()
        );
    }

    public static UserScheduleResponseDto fromSubjectSchedule(SubjectScheduleEntity schedule) {
        return new UserScheduleResponseDto(
                schedule.getId(),
                schedule.getTitle(),
                schedule.getStartDate(),
                SubjectScheduleEntity.class.getAnnotation(DiscriminatorValue.class).value(),
                schedule.getSubjectScheduleType().name(),
                schedule.getSubject().getSubjectName(),
                LocalDateTime.now().getDayOfYear() - schedule.getEndDate().getDayOfYear()
        );
    }

    public static UserScheduleResponseDto fromOfficialSchedule(OfficialSubjectScheduleEntity schedule) {
        return new UserScheduleResponseDto(
                schedule.getId(),
                schedule.getTitle(),
                schedule.getStartDate(),
                OfficialSubjectScheduleEntity.class.getAnnotation(DiscriminatorValue.class).value(),
                schedule.getSubjectScheduleType().name(),
                schedule.getSubject().getSubjectName(),
                LocalDateTime.now().getDayOfYear() - schedule.getEndDate().getDayOfYear());
    }
}