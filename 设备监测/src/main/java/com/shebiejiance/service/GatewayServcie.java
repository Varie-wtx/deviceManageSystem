package com.shebiejiance.service;

import com.shebiejiance.entity.Gateway;

public interface GatewayServcie {
    void update(Long id, Gateway gateway);

    void delete(Long id);
}
