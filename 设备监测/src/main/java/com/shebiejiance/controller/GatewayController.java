package com.shebiejiance.controller;


import com.shebiejiance.entity.Gateway;
import com.shebiejiance.repository.GatewayRepository;
import com.shebiejiance.service.GatewayServcie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Gateway")
public class GatewayController {
    @Autowired
    private GatewayRepository gatewayRepository;
    @Autowired
    private GatewayServcie gatewayServcie;

    @PostMapping("/")
    public Gateway save(@RequestBody Gateway gateway) {
        return gatewayRepository.save(gateway);
    }

    @GetMapping("/")
    public List<Gateway> getAll() {
        List<Gateway> gateways = (List<Gateway>) gatewayRepository.findAll();
        return gateways;
    }
    /**
     * 定义一个put路由来更新数据
     * @param id
     * @param gateway
     */
    @PutMapping("/{id}")
    public void update(@PathVariable Long id, @RequestBody Gateway gateway) {
        gatewayServcie.update(id, gateway);
        return;
    }

    /**
     * 删除传感器
     * @param id
     */
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        gatewayServcie.delete(id);
    }

    @GetMapping("/{id}")
    public Gateway get(@PathVariable Long id) {
        Gateway gateway = gatewayRepository.findOne(id);
        return gateway;
    }
}
