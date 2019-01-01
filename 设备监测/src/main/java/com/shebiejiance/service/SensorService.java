package com.shebiejiance.service;

import com.shebiejiance.entity.Sensor;

public interface SensorService {
    void update(Long id, Sensor sensor);

    void delete(Long id);
}
