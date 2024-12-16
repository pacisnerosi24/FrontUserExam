<template>
  <div class="form-container">
    <h2>Crear Usuario</h2>
    <form @submit.prevent="saveUser">
      <input v-model="user.name" type="text" placeholder="Nombre" required />
      <input v-model="user.email" type="email" placeholder="Correo" required />
      <input v-model="user.password" type="password" placeholder="Contraseña" required />
      <button type="submit">Guardar Usuario</button>
    </form>
  </div>
</template>

<script>
import axios from '../axios'; // Importa la instancia de Axios

export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: ''
      }
    };
  },
  methods: {
    async saveUser() {
      try {
        const response = await axios.post('users', this.user); // POST a http://localhost:3000/api/users
        console.log('Usuario creado:', response.data);
        this.$emit('user-saved'); // Emitir evento para actualizar la lista de usuarios
        this.resetForm();
      } catch (error) {
        console.error('Error al guardar usuario:', error);
      }
    },
    resetForm() {
      this.user = { name: '', email: '', password: '' };
    }
  }
};
</script>

<style scoped>
/* Estilos del formulario */
.form-container {
  padding: 20px;
}

input {
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}

button {
  padding: 10px;
  background-color: #3498db;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}
</style>
