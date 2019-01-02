package com.shebiejiance.service;

import com.shebiejiance.entity.SenMess;

import java.sql.Date;
import java.util.List;

public interface SenMessService {
    void delete (Long id);
    List<SenMess> findByTime(Long id, Date t1, Date t2);
}
