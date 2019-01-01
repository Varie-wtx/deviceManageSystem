package com.shebiejiance.controller;

import com.shebiejiance.entity.Sensor;
import com.shebiejiance.repository.SensorRepository;
import com.shebiejiance.service.SensorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Sensor")
public class SensorController {
    @Autowired
    private SensorRepository sensorRepository;
    @Autowired
    private SensorService sensorService;

    @PostMapping("/")
    public Sensor save(@RequestBody Sensor sensor) {
        return sensorRepository.save(sensor);
    }

    @GetMapping("/")
    public List<Sensor> getAll() {
        List<Sensor> sensors = (List<Sensor>) sensorRepository.findAll();
        return sensors;
    }
    /**
     * 定义一个put路由来更新数据
     * @param id
     * @param sensor
     */
    @PutMapping("/{id}")
    public void update(@PathVariable Long id, @RequestBody Sensor sensor) {
        sensorService.update(id, sensor);
        return;
    }

    /**
     * 删除传感器
     * @param id
     */
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        sensorService.delete(id);
    }

    @GetMapping("/{id}")
    public Sensor get(@PathVariable Long id) {
        Sensor sensor = sensorRepository.findOne(id);
        return sensor;
    }
}
