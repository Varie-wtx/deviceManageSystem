package com.shebiejiance.entity;

import javax.persistence.*;
import java.sql.Date;
import java.util.Set;

@Entity
public class Device {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String type;
    private String address;
    private int status;
    private Date firstruntime;
    private String note;
    @ManyToMany
    private Set<Sensor> sensors;

    public Device(Long id, String name, String type, String address, int status, Date firstruntime, String note, Set<Sensor> sensors) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.address = address;
        this.status = status;
        this.firstruntime = firstruntime;
        this.note = note;
        this.sensors = sensors;
    }

    public Device() {
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public Date getFirstruntime() {
        return firstruntime;
    }

    public void setFirstruntime(Date firstruntime) {
        this.firstruntime = firstruntime;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public Set<Sensor> getSensors() {
        return sensors;
    }

    public void setSensors(Set<Sensor> sensors) {
        this.sensors = sensors;
    }
}
