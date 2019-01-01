package com.shebiejiance.controller;

import com.shebiejiance.entity.User;
import com.shebiejiance.repository.UserRepository;
import com.shebiejiance.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.security.auth.message.AuthException;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping("/User")
public class UserController {

    private final static Logger logger = LoggerFactory.getLogger(UserController.class.getName());

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserService userService;

    /**
     * 获取所有的用户
     * @return
     */
    @GetMapping("/")
    public List<User> getAll() {
        List<User> users = (List<User>) userRepository.findAll();
        return users;
    }

    @GetMapping("/page")
    public Page<User> page(@RequestParam int page, @RequestParam int size) {
        PageRequest pageRequest = new PageRequest(page, size);
        Page<User> klassPage = userService.page(pageRequest);
        return klassPage;
    }

    /**
     * 获取一个用户
     * @param id
     * @return
     */
    @GetMapping("/{id}")
    public User get(@PathVariable Long id) {
        User teacher = userRepository.findOne(id);
        return teacher;
    }

    /**
     * 教师保存
     * @param user
     * @return
     */
    @PostMapping("/")
    public User save(@RequestBody User user) {
        return userRepository.save(user);
    }

    /**
     * 定义一个put路由来更新数据
     * @param id
     * @param user
     */
    @PutMapping("/{id}")
    public void update(@PathVariable Long id, @RequestBody User user) {
        userService.update(id, user);
        return;
    }

    /**
     * 删除教师
     * @param id
     */
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        userService.delete(id);
    }

    /**
     * 登陆
     * @param user
     * @param httpServletResponse
     */
    @PostMapping("/login")
    public void login(@RequestBody User user, HttpServletResponse httpServletResponse) {
        // 用户登陆
        if (userService.login(user)) {
            logger.info("登录成功");
        } else {
            httpServletResponse.setStatus(401);
            logger.info("登录失败");
        }
    }


    @PostMapping("/logout")
    public void logout(HttpServletResponse httpServletResponse) {
        try {
            userService.logout();
        } catch (AuthException e) {
            httpServletResponse.setStatus(HttpStatus.UNAUTHORIZED.value());
        }
    }
}
