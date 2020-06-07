package com.example.demo.Entity;

import ch.qos.logback.classic.db.names.ColumnName;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity

public class Place {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;
    private String placeCode;
    private String placeValue;
}
