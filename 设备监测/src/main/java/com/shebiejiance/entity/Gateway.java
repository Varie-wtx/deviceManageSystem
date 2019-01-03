package com.shebiejiance.entity;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Gateway {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    @OneToOne
    private GatewayType gatewayType;
    private String macAddress;
    private String address;
    private int status;
    private double lixianJudgeTime;
    private String onlineDescription;
    private String note;



    public Gateway(Long id, String name, GatewayType gatewayType, String macAddress, String address, int status, double lixianJudgeTime, String onlineDescription, String note) {
        this.id = id;
        this.name = name;
        this.gatewayType = gatewayType;
        this.macAddress = macAddress;
        this.address = address;
        this.status = status;
        this.lixianJudgeTime = lixianJudgeTime;
        this.onlineDescription = onlineDescription;
        this.note = note;
    }

    public Gateway() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public GatewayType getGatewayType() {
        return gatewayType;
    }

    public void setGatewayType(GatewayType gatewayType) {
        this.gatewayType = gatewayType;
    }

    public String getMacAddress() {
        return macAddress;
    }

    public void setMacAddress(String macAddress) {
        this.macAddress = macAddress;
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

    public double getLixianJudgeTime() {
        return lixianJudgeTime;
    }

    public void setLixianJudgeTime(double lixianJudgeTime) {
        this.lixianJudgeTime = lixianJudgeTime;
    }

    public String getOnlineDescription() {
        return onlineDescription;
    }

    public void setOnlineDescription(String onlineDescription) {
        this.onlineDescription = onlineDescription;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

}
