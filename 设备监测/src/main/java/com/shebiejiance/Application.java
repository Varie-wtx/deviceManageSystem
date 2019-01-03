package com.shebiejiance;

import com.shebiejiance.entity.GatewayType;
import com.shebiejiance.repository.GateTypeRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.shebiejiance.entity.Power;
import com.shebiejiance.repository.PowerRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.*;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication
@EnableAsync
public class Application {
    private static final Logger log = LoggerFactory.getLogger(Application.class);
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**").allowedOrigins("http://localhost:9000").allowedMethods("GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "TRACE");
            }
        };
    }

    @Bean
    public CommandLineRunner demo(PowerRepository powerRepository, GateTypeRepository gateTypeRepository) {
        return (args) -> {
            // save a couple of customers
            Power power1 = new Power();
            power1.setPowername("权限1");
            Power power2 = new Power();
            power2.setPowername("权限2");
            Power power3 = new Power();
            power3.setPowername("权限3");
            Power power4 = new Power();
            power4.setPowername("权限4");
            powerRepository.save(power1);
            powerRepository.save(power2);
            powerRepository.save(power3);
            powerRepository.save(power4);

            GatewayType gatewayType = new GatewayType(1L,"联创中控网关");
            gateTypeRepository.save(gatewayType);
        };
    }
    @Bean
    public CommandLineRunner demo(GateTypeRepository gateTypeRepository) {
        return (args) -> {
            // save a couple of customers
            GatewayType gatewayType = new GatewayType(1L,"联创中控网关");
            gateTypeRepository.save(gatewayType);
        };
    }

}
