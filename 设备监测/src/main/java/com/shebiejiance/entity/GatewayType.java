package com.shebiejiance.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class GatewayType {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String gateTypeName;

    public GatewayType(Long id, String gateTypeName) {
        this.id = id;
        this.gateTypeName = gateTypeName;
    }

    public GatewayType() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getGateTypeName() {
        return gateTypeName;
    }

    public void setGateTypeName(String gateTypeName) {
        this.gateTypeName = gateTypeName;
    }
}
