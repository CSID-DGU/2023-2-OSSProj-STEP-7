package com.example.backend.repository;

import com.example.backend.model.SubjectEntity;
import com.example.backend.model.UserEntity;
import com.example.backend.model.UserSubject;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserSubjectRepository extends JpaRepository<UserSubject, Long> {
    List<UserSubject> findAllByUser(UserEntity user);
    Optional<UserSubject> findByUserAndSubject(UserEntity user, SubjectEntity subject);
    List<UserSubject> findAllBySubject(SubjectEntity subject);
}
