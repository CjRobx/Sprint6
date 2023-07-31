package cl.cjrob.sprint6.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import cl.cjrob.sprint6.modelos.Usuario;

@Repository
public interface UsuarioRepository extends CrudRepository<Usuario, Long> {

}
