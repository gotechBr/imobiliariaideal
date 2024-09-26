package Controller;

import Repository.ImovelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/imovel")
public class ImovelController {

    @Autowired
    ImovelRepository imovelRepository;
}
