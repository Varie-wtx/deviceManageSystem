package com.shebiejiance.controller;

import com.shebiejiance.entity.Role;
import com.shebiejiance.repository.RoleRepository;
import com.shebiejiance.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Role")
public class RoleController {

    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private RoleService roleService;

    /**
     * 获取所有的角色
     * @return
     */
    @GetMapping("/")
    public List<Role> getAll() {
        List<Role> roles = (List<Role>) roleRepository.findAll();
        return roles;
    }

    @GetMapping("/page")
    public Page<Role> page(@RequestParam int page, @RequestParam int size) {
        PageRequest pageRequest = new PageRequest(page, size);
        Page<Role> rolePage = roleService.page(pageRequest);
        return rolePage;
    }

    /**
     * 获取一个角色
     * @param id
     * @return
     */
    @GetMapping("/{id}")
    public Role get(@PathVariable Long id) {
        Role role = roleRepository.findOne(id);
        return role;
    }

    /**
     * 教师保存
     * @param role
     * @return
     */
    @PostMapping("/")
    public Role save(@RequestBody Role role) {
        return roleRepository.save(role);
    }

    /**
     * 定义一个put路由来更新数据
     * @param id
     * @param role
     */
    @PutMapping("/{id}")
    public void update(@PathVariable Long id, @RequestBody Role role) {
        roleService.update(id, role);
        return;
    }

    /**
     * 删除角色
     * @param id
     */
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        roleService.delete(id);
    }
}
