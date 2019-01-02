package com.shebiejiance.service;

import com.shebiejiance.entity.Device;
import com.shebiejiance.repository.DeviceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class DeviceServiceImpl implements DeviceService {
    @Autowired
    private DeviceRepository deviceRepository;
    @Override
    public void add(Device device) {
        deviceRepository.save(device);
    }

    @Override
    public void update(long id, Device device) {
        Device olddevice=deviceRepository.findOne(id);
        olddevice.setAddress(olddevice.getAddress());
        olddevice.setNote(olddevice.getNote());
        olddevice.setFirstruntime(olddevice.getFirstruntime());
        olddevice.setName(olddevice.getName());
        olddevice.setStatus(olddevice.getStatus());
        olddevice.setType(olddevice.getType());
    }

    @Override
    public void delete(long id) {
        deviceRepository.delete(id);
    }

}
