package cl.cjrob.sprint6.services;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cl.cjrob.sprint6.modelos.Usuario;
import cl.cjrob.sprint6.repositories.UsuarioRepository;

@Service
public class UsuarioService {

		@Autowired
		UsuarioRepository usuarioRepository;
		

		public Usuario create(Usuario u) {
			return usuarioRepository.save(u);
		}
		
		public Usuario read(Long id) {
			Optional <Usuario> usuarioBd = usuarioRepository.findById(id);
			
			if(usuarioBd.isPresent()) return usuarioBd.get();
			
			return null;
		}
		
		public List<Usuario> readAll(){
			return (List<Usuario>) usuarioRepository.findAll();
		}
		
		public Usuario put(Usuario u,Long id) {
			Optional<Usuario> optionalIU = usuarioRepository.findById(id);
			
			if(optionalIU.isPresent()) {
				Usuario bdU = optionalIU.get();
				bdU.setNombre(u.getNombre() !=null ? u.getNombre() : bdU.getNombre());
				bdU.setApellido(u.getApellido() !=null ? u.getApellido():bdU.getApellido());
				bdU.setRut(u.getRut() != null ? u.getRut() : bdU.getRut());
				bdU.setCargo(u.getCargo() != null ? u.getCargo(): u.getCargo());
			
				return usuarioRepository.save(bdU);
			}
			return null;
		}
	
	
	
	
	public void delete(Long id) {
		usuarioRepository.deleteById(id);
	}
}
