package com.shebiejiance.service;

import com.shebiejiance.entity.User;
import com.shebiejiance.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.security.auth.message.AuthException;
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Override
    public void update(Long id, User newUser) {
        User oldUser = userRepository.findOne(id);
        // 依次更新每个字段
        oldUser.setUsername(newUser.getUsername());
        oldUser.setPassword(newUser.getPassword());
        oldUser.setName(newUser.getName());
        // 更新数据表
        userRepository.save(oldUser);
        return;
    }

    @Override
    public User getOneSavedUser() {
        return null;
    }

    @Override
    public void delete(Long id) {
        userRepository.delete(id);
    }

    @Override
    public boolean login(User user) {
        User persistUser = userRepository.findByUsername(user.getUsername());
        if (persistUser == null) {
            return false;
        }
        if (!persistUser.getPassword().equals(user.getPassword())) {
            return false;
        }
        return true;
    }

    @Override
    public User getOneUser() {
        return null;
    }

    @Override
    public void logout() throws AuthException {

    }

    @Override
    public Page<User> page(Pageable pageable) {
        return userRepository.findAll(pageable);
    }
}
