package com.shebiejiance.entity;

import javax.persistence.*;

@Entity
public class Sensor {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String nodeId;
    private String channelId;
    private String dataType;
    private String note;
    @ManyToOne
    private Gateway gateway;

    public Sensor() {
    }

    public Sensor(Long id, String name, String nodeId, String channelId, String dataType, String note, Gateway gateway) {
        this.id = id;
        this.name = name;
        this.nodeId = nodeId;
        this.channelId = channelId;
        this.dataType = dataType;
        this.note = note;
        this.gateway = gateway;
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

    public String getNodeId() {
        return nodeId;
    }

    public void setNodeId(String nodeId) {
        this.nodeId = nodeId;
    }

    public String getChannelId() {
        return channelId;
    }

    public void setChannelId(String channelId) {
        this.channelId = channelId;
    }

    public String getDataType() {
        return dataType;
    }

    public void setDataType(String dataType) {
        this.dataType = dataType;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public Gateway getGateway() {
        return gateway;
    }

    public void setGateway(Gateway gateway) {
        this.gateway = gateway;
    }
}
