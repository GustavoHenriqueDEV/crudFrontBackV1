package com.Crudexample.crud;

import com.Crudexample.crud.model.Usuario;
import com.Crudexample.crud.repository.UsuarioRepository;
import com.Crudexample.crud.service.UsuarioService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest
class CrudApplicationTests {

	@Mock
	private UsuarioRepository usuarioRepository;

	@InjectMocks
	private UsuarioService usuarioService;

	@Test
	public void testaCreateUser(){


		Usuario mockUsuario = new Usuario(1L, "João Silva", "joao123", "senhaSegura", "joao@example.com", 30);
		when(usuarioRepository.save(mockUsuario)).thenReturn(mockUsuario);


		Usuario usuarioResult = usuarioService.create(mockUsuario);

		assertNotNull(usuarioResult);
		assertNotNull(usuarioResult.getIdusuario());
		assertEquals("João Silva", usuarioResult.getNome());
		assertEquals("joao123", usuarioResult.getLogin());
		assertEquals("senhaSegura", usuarioResult.getSenha());
		assertEquals(30, usuarioResult.getIdade());
		assertEquals("joao@example.com", usuarioResult.getEmail());

		verify(usuarioRepository, times(1)).save(usuarioResult);

 	}
}
