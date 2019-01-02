package com.shebiejiance.service;

import com.shebiejiance.entity.Device;

import java.util.List;

public interface DeviceService {
    void add(Device device);
    void update(long id,Device device);
    void delete(long id);
}
