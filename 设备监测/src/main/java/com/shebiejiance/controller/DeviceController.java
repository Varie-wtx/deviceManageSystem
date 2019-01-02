package com.shebiejiance.controller;

import com.shebiejiance.entity.Device;
import com.shebiejiance.entity.Sensor;
import com.shebiejiance.repository.DeviceRepository;
import com.shebiejiance.repository.SensorRepository;
import com.shebiejiance.service.DeviceService;
import com.shebiejiance.service.SensorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Device")
public class DeviceController {
        @Autowired
        private DeviceRepository deviceRepository;
        @Autowired
        private DeviceService deviceService;

        @PostMapping("/")
        public Device save(@RequestBody Device device) {
            return deviceRepository.save(device);
        }

        @GetMapping("/")
        public List<Device> getAll() {
            List<Device> devices = (List<Device>) deviceRepository.findAll();
            return devices;
        }
        /**
         * 定义一个put路由来更新数据
         * @param id
         * @param
         */
        @PutMapping("/{id}")
        public void update(@PathVariable Long id, @RequestBody Device device) {
            deviceService.update(id, device);
            return;
        }

        /**
         * 删除传感器
         * @param id
         */
        @DeleteMapping("/{id}")
        public void delete(@PathVariable Long id) {
            deviceService.delete(id);
        }

        @GetMapping("/{id}")
        public Device get(@PathVariable Long id) {
            Device device = deviceRepository.findOne(id);
            return device;
        }
}
