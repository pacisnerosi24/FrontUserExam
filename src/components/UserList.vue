<template>
  <div class="user-list">
    <h2>Lista de Usuarios</h2>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from '../axios'; // Importa la instancia de Axios

export default {
  data() {
    return {
      users: []
    };
  },
  async mounted() {
    try {
      const response = await axios.get('users'); // Hace un GET a http://localhost:3000/api/users
      this.users = response.data; // Asigna los datos de la respuesta a la propiedad 'users'
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
    }
  }
};
</script>

<style scoped>
/* Estilos para la lista de usuarios */
.user-list {
  padding: 20px;
}

.user-list ul {
  list-style-type: none;
  padding: 0;
}

.user-list li {
  margin-bottom: 10px;
  font-size: 16px;
}
</style>
