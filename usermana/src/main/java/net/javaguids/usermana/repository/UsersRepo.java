package net.javaguids.usermana.repository;

import net.javaguids.usermana.entity.OurUsers;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsersRepo extends JpaRepository<OurUsers, Integer> {
    Optional<OurUsers> findByEmail(String email);
    boolean existsByEmail(String email);
}
