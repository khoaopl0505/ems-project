package net.javaguids.emsbackend.service;

import net.javaguids.emsbackend.dto.UserDto;

import java.util.List;

public interface UserService {

    UserDto createUser(UserDto userDto);
    UserDto getUserById(String userId);
    List<UserDto> getAllUsers();
    UserDto updateUser(String userID, UserDto updatedUser);
    void deleteUser(String userId);
}
