package com.shebiejiance.controller;

import com.shebiejiance.entity.Power;
import com.shebiejiance.repository.PowerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/Power")
public class PowerController {
    @Autowired
    PowerRepository powerRepository;
    @GetMapping("/")
    public List<Power> getAll() {
        List<Power> powers = (List<Power>) powerRepository.findAll();
        return powers;
    }
}
