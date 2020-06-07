package com.example.demo.Entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;


@Data
@Entity
public class Trip {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;
    private String tripNumber;
    private Integer placeFrom;
    private Integer placeTo;
    private Date dateFrom;
    private Date dateto;
}
