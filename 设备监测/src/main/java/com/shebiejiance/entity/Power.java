package com.shebiejiance.entity;

import javax.persistence.*;

@Entity
public class Power {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String powername;

    public Power(Long id, String powername) {
        this.id = id;
        this.powername = powername;
    }
    public Power() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPowername() {
        return powername;
    }

    public void setPowername(String powername) {
        this.powername = powername;
    }
}
