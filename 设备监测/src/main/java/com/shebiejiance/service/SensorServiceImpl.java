package com.shebiejiance.service;

import com.shebiejiance.entity.Sensor;
import com.shebiejiance.repository.SensorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SensorServiceImpl implements SensorService {
    @Autowired
    private SensorRepository sensorRepository;

    @Override
    public void update(Long id, Sensor newSensor) {
        Sensor oldSensor = sensorRepository.findOne(id);
        oldSensor.setType(newSensor.getType());
        oldSensor.setSensorId(newSensor.getSensorId());
        // 更新数据表
        sensorRepository.save(oldSensor);
    }

    @Override
    public void delete(Long id) {
       sensorRepository.delete(id);
    }
}
