package com.shebiejiance.service;

import com.shebiejiance.entity.SenMess;
import com.shebiejiance.entity.Sensor;
import com.shebiejiance.repository.SenMessrepository;
import com.shebiejiance.repository.SensorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.List;

@Service
public class SenMessServicelmpl implements SenMessService {
    @Autowired
    private SenMessrepository senMessrepository;
    @Autowired
    private SensorRepository sensorrepository;

    @Override
    public void delete(Long id) {
        senMessrepository.delete(id);
    }

    @Override
    public List<SenMess> findByTime(Long id, Date t1, Date t2) {
        List<SenMess> senMesses = (List<SenMess>) senMessrepository.findAll();
        for (SenMess senMess : senMesses) {
            if (senMess.getSensor().getId() != id || senMess.getMess_time().before(t1) || senMess.getMess_time().after(t2)) {
                senMesses.remove(senMess);
            }
        }
        return senMesses;
    }
}
