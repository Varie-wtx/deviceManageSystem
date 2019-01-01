package com.shebiejiance.service;

import com.shebiejiance.entity.Role;
import com.shebiejiance.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class RoleServiceImpl implements RoleService {

    @Autowired
    RoleRepository roleRepository;
    @Override
    public Page<Role> page(Pageable pageable) {
        return null;
    }

    @Override
    public void update(Long id, Role newRole) {
        Role oldRole= roleRepository.findOne(id);
        // 依次更新每个字段
        oldRole.setRolename(newRole.getRolename());
        // 更新数据表
        roleRepository.save(oldRole);
        return;
    }

    @Override
    public void delete(Long id) {
        roleRepository.delete(id);
    }
}
