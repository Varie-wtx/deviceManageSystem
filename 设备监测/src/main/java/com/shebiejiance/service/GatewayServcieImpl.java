package com.shebiejiance.service;

import com.shebiejiance.entity.Gateway;
import com.shebiejiance.repository.GatewayRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GatewayServcieImpl implements GatewayServcie {
    @Autowired
    private GatewayRepository gatewayRepository;
    @Override
    public void update(Long id, Gateway newGateway) {
        Gateway oldGateway = gatewayRepository.findOne(id);
        oldGateway.setName(newGateway.getName());
        // 更新数据表
        gatewayRepository.save(oldGateway);
    }

    @Override
    public void delete(Long id) {
        gatewayRepository.delete(id);
    }
}
