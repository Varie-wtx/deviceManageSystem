package com.shebiejiance.entity;

import javax.persistence.*;
import java.sql.Date;

@Entity
public class SenMess {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Date mess_time;
    private double temperature;
    private double humidity;
    private double press;
    private double swing;
    @OneToOne
    @JoinColumn(name = "sensorid",referencedColumnName = "id")
    private Sensor sensor;

    public SenMess(Long id, Date mess_time, double temperature, double humidity, double press, double swing, Sensor sensor) {
        this.id = id;
        this.mess_time = mess_time;
        this.temperature = temperature;
        this.humidity = humidity;
        this.press = press;
        this.swing = swing;
        this.sensor = sensor;
    }

    public Sensor get_id()
    {
        return sensor;
    }

    public Date getMess_time() {
        return mess_time;
    }

    public void setMess_time(Date mess_time) {
        this.mess_time = mess_time;
    }

    public double getTemperature() {
        return temperature;
    }

    public void setTemperature(double temperature) {
        this.temperature = temperature;
    }

    public double getHumidity() {
        return humidity;
    }

    public void setHumidity(double humidity) {
        this.humidity = humidity;
    }

    public double getPress() {
        return press;
    }

    public void setPress(double press) {
        this.press = press;
    }

    public double getSwing() {
        return swing;
    }

    public void setSwing(double swing) {
        this.swing = swing;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Sensor getSensor() {
        return sensor;
    }

    public void setSensor(Sensor sensor) {
        this.sensor = sensor;
    }

    public SenMess() {
    }
}
