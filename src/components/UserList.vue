<template>
  <section class="user-list">
    <h2>Lista de Usuarios</h2>

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>
            <button @click="editUser(user)" class="btn btn-warning">✏️ Editar</button>
            <button @click="deleteUser(user.id)" class="btn btn-danger">🗑️ Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  props: ['users'],
  methods: {
    editUser(user) {
      this.$emit('user-edited', user);
    },
    async deleteUser(id) {
      if (!confirm('¿Estás seguro de que deseas eliminar este usuario?')) return;

      try {
        const response = await fetch(`http://localhost:8000/api/users/${id}`, { method: 'DELETE' });
        if (!response.ok) throw new Error('Error al eliminar el usuario');
        this.$emit('user-deleted');
      } catch (error) {
        console.error('Error al eliminar el usuario:', error);
      }
    }
  }
}
</script>

<style src="../assets/styles.css"></style>
