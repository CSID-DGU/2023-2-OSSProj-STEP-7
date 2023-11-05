package com.example.backend.repository;

import com.example.backend.model.OfficialSubjectScheduleEntity;
import com.example.backend.model.UserOfficialScheduleEntity;
import com.example.backend.model.ScheduleEntity;
import com.example.backend.model.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserOfficialScheduleRepository extends JpaRepository<UserOfficialScheduleEntity, Long> {
    Optional<UserOfficialScheduleEntity> findByScheduleAndUser(OfficialSubjectScheduleEntity schedule, UserEntity user);
    void deleteAllBySchedule(ScheduleEntity schedule);

}