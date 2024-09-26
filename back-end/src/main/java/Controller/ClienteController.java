package Controller;

import Repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/cliente")
public class ClienteController {

    @Autowired
    ClienteRepository clienteRepository;


}
