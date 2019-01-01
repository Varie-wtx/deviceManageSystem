package com.shebiejiance.entity;

import javax.persistence.*;
import java.sql.Date;

@Entity
public class Alarm_Mess {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Date alarm_time;
    private String note;
    @OneToOne
    @JoinColumn(name = "device_id",referencedColumnName = "id")
    private Device device;
    public Device get_id()
    {
        return device;
    }
    public Date getAlarm_time() {
        return alarm_time;
    }

    public void setAlarm_time(Date alarm_time) {
        this.alarm_time = alarm_time;
    }

    public Alarm_Mess(Long id, Device device, Date alarm_time, String note) {
        this.id = id;
        this.device = device;
        this.alarm_time = alarm_time;
        this.note = note;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Device getDevice() {
        return device;
    }

    public void setDevice(Device device) {
        this.device = device;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public Alarm_Mess() {
    }
}
