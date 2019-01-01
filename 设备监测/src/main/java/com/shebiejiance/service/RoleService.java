package com.shebiejiance.service;

import com.shebiejiance.entity.Role;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface RoleService {
    Page<Role> page(Pageable pageable);

    void update(Long id, Role role);

    void delete(Long id);
}
