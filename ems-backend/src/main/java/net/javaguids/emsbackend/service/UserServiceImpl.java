package net.javaguids.emsbackend.service;

import lombok.AllArgsConstructor;
import net.javaguids.emsbackend.dto.UserDto;
import net.javaguids.emsbackend.entity.User;
import net.javaguids.emsbackend.exception.ResourceNotFoundException;
import net.javaguids.emsbackend.mapper.UserMapper;
import net.javaguids.emsbackend.repo.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService{

    private UserRepository userRepository;

    @Override
    public UserDto createUser(UserDto userDto) {
        User user = UserMapper.mapToUser(userDto);
        User savedUser= userRepository.save(user);
        return UserMapper.mapToUserDto(savedUser);

    }

    @Override
    public UserDto getUserById(String userId) {
       User user = userRepository.findById(userId).orElseThrow(
                () -> new ResourceNotFoundException("User not found")
        );

        return UserMapper.mapToUserDto(user);
    }

    @Override
    public List<UserDto> getAllUsers() {

        List<User> users = userRepository.findAll();

        return users.stream().map((user)->UserMapper.mapToUserDto(user))
                .collect(Collectors.toList());
    }

    @Override
    public UserDto updateUser(String userID, UserDto updatedUser) {

        User user =  userRepository.findById(userID).orElseThrow(
                () -> new ResourceNotFoundException("User not found")
        );

        user.setUsername(updatedUser.getUsername());
        user.setPassword(updatedUser.getPassword());
        User updatedUserObj = userRepository.save(user);
        return UserMapper.mapToUserDto(updatedUserObj);
    }

    @Override
    public void deleteUser(String userId) {
        User user =  userRepository.findById(userId).orElseThrow(
                () -> new ResourceNotFoundException("User not found")
        );
        userRepository.deleteById(userId);
    }


}
