package com.wyw.nestedpies.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * @author wyw
 * @date 2018\2\6 0006 13:56
 */
@Controller
public class NestedPiesController {

    @GetMapping(value = "/index")
    public String nestedPies() {
        return "html/nestedPies.html";
    }

}
