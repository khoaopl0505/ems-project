package net.javaguids.usermana.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import net.javaguids.usermana.entity.OurUsers;

import java.sql.Time;
import java.time.LocalDate;
import java.util.List;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
public class ReqRes {

    private int statusCode; //28
    private String error;
    private String message;
    private String token;
    private String refreshToken;
    private String expirationTime;
    private String name;
    private String city;
    private String role;
    private String email;
    private String password;
    private OurUsers ourUsers;
    private List<OurUsers> ourUsersList;
    private LocalDate dateOfBirth;
    private Time createTime;
    private Time lastLoginTime;
}