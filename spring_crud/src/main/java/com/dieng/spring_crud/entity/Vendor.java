package com.dieng.spring_crud.entity;

import jakarta.persistence.*;
import lombok.*;
@Data
@Entity
@Table(name = "vendor")
public class Vendor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String phone;
}
