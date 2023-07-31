package cl.cjrob.sprint6.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cl.cjrob.sprint6.modelos.Usuario;
import cl.cjrob.sprint6.services.UsuarioService;



@RestController
@CrossOrigin ({"http://127.0.0.1:5500/","http://127.0.0.1:8000/"})
@RequestMapping("usuario")
public class UsuarioController {

	
	
	@Autowired
	UsuarioService usuarioService;
	
	@PostMapping()
	public Usuario create(@RequestBody Usuario c) {
		return usuarioService.create(c);
	}
	@GetMapping("/{id}")
	public Usuario getOne(@PathVariable Long id) {
		return usuarioService.read(id);
	}
	@GetMapping("/listar")
	public List<Usuario> getAll() {
		return usuarioService.readAll();
	}
	@PutMapping("/{id}")
	public Usuario update(@RequestBody Usuario u,@PathVariable Long id) {
		return usuarioService.put(u,id);
	}
	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		usuarioService.delete(id);
	}
}
