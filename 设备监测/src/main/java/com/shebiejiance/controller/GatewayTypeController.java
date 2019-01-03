package com.shebiejiance.controller;

import com.shebiejiance.entity.GatewayType;
import com.shebiejiance.repository.GateTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/GateWayType")
public class GatewayTypeController {
    @Autowired
    private GateTypeRepository gateTypeRepository;
    @GetMapping("/")
    public List<GatewayType> getAll() {
        List<GatewayType> gatewayTypes = (List<GatewayType>) gateTypeRepository.findAll();
        return gatewayTypes;
    }
}
