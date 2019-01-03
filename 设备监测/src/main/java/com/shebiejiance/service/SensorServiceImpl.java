package com.shebiejiance.service;

import com.shebiejiance.entity.Sensor;
import com.shebiejiance.repository.SensorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SensorServiceImpl implements SensorService {
    @Autowired
    private SensorRepository sensorRepository;

    @Override
    public void update(Long id, Sensor newSensor) {
        Sensor oldSensor = sensorRepository.findOne(id);
        oldSensor.setName(newSensor.getName());
        oldSensor.setNodeId(newSensor.getNodeId());
        // 更新数据表
        sensorRepository.save(oldSensor);
    }

    @Override
    public void add(Sensor sensor) {
        sensorRepository.save(sensor);
    }

    @Override
    public void delete(Long id) {
       sensorRepository.delete(id);
    }

}
