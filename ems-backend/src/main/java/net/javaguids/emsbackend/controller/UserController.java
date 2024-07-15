package net.javaguids.emsbackend.controller;

import lombok.AllArgsConstructor;
import net.javaguids.emsbackend.dto.UserDto;
import net.javaguids.emsbackend.service.UserService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("api/users")
public class UserController {
    private UserService userService;

    @PostMapping
    public ResponseEntity<UserDto> createUser(@RequestBody UserDto userDto){
        UserDto savedUser = userService.createUser(userDto);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }
    @GetMapping("{id}")
    public ResponseEntity<UserDto> getUserById(@PathVariable("id") String userId){
        UserDto userDto = userService.getUserById(userId);
        return  ResponseEntity.ok(userDto);
    }
    @GetMapping
    public ResponseEntity<List<UserDto>> getAllUsers(){
        List<UserDto> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }
    @PutMapping("{id}")
    public ResponseEntity<UserDto> updateUser(@PathVariable("id") String userId,
                                              @RequestBody UserDto updatedUser){
        UserDto userDto = userService.updateUser(userId, updatedUser);
        return ResponseEntity.ok(userDto);
    }
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") String userId){
        userService.deleteUser(userId);
        return ResponseEntity.ok("delete complete");
    }
}
