package com.shebiejiance.controller;
import com.shebiejiance.entity.SenMess;
import com.shebiejiance.service.SenMessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/SenMess")
public class SenMessController
{
    @Autowired
    private SenMessService senMessService;
    //@GetMapping("/{id}/{Time1}/{Time2}")
   // public List<SenMess> find() {
        //List<SenMess> senMesses = (List<SenMess>) senMessService.findByTime(@PathVariable Long id,);
        //return senMesses;
    //}
}
