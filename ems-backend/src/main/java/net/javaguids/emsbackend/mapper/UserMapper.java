package net.javaguids.emsbackend.mapper;

import net.javaguids.emsbackend.dto.UserDto;
import net.javaguids.emsbackend.entity.User;

public class UserMapper {

    public static UserDto mapToUserDto(User user){
        return new UserDto(

                user.getId(),
                user.getUsername(),
                user.getPassword()
        );
    }

    public static User mapToUser(UserDto userdto){
        return new User(
                userdto.getId(),
              userdto.getUsername(),
              userdto.getPassword()
        );
    }

}
