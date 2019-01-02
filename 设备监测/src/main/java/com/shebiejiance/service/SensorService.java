package com.shebiejiance.service;

import com.shebiejiance.entity.Sensor;

import java.util.List;

public interface SensorService {
    void update(Long id, Sensor sensor);
    void add(Sensor sensor);
    void delete(Long id);
}
