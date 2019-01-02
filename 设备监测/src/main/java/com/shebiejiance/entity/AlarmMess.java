package com.shebiejiance.entity;

import javax.persistence.*;

@Entity
public class AlarmMess {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @ManyToOne
    @JoinColumn(name = "deviceId",referencedColumnName = "id")
    private Device device;
    @OneToOne
    @JoinColumn(name = "senmessId",referencedColumnName = "id")
    private SenMess senMess;
}
