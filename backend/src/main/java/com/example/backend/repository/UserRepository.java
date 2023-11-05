package com.example.backend.repository;

import com.example.backend.model.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {
    Optional<UserEntity> findBySchoolNumber(String schoolNumber);

    Optional<UserEntity> findByName(String name);
}
