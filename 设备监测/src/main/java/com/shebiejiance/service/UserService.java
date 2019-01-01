package com.shebiejiance.service;

import com.shebiejiance.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import javax.security.auth.message.AuthException;

public interface UserService {
    /**
     * 更新教师
     * @param id
     * @param user
     */
    void update(Long id, User user);
    User getOneSavedUser();

    void delete(Long id);

    /**
     * 用户登陆
     * @param user
     * @return
     */
    boolean login(User user);
    User getOneUser();


    void logout() throws AuthException;

    Page<User> page(Pageable pageable);
}
