<template>
  <section class="form-container">
    <h2>{{ user.id ? 'Editar Usuario' : 'Crear Usuario' }}</h2>

    <form @submit.prevent="saveUser" class="user-form">
      <input v-model="user.id" type="hidden">

      <div class="form-group">
        <label for="name">Nombre</label>
        <input id="name" v-model="user.name" placeholder="Ingrese el nombre" required>
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input id="email" v-model="user.email" type="email" placeholder="Ingrese el correo" required>
      </div>

      <div class="form-group">
        <label for="password">Contraseña</label>
        <input id="password" v-model="user.password" type="password" placeholder="Ingrese la contraseña" :required="!user.id">
      </div>

      <div class="button-group">
        <button type="submit" class="btn btn-primary">{{ user.id ? 'Actualizar' : 'Guardar' }}</button>
        <button type="button" @click="resetForm" class="btn btn-secondary">Cancelar</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        id: null,
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async saveUser() {
      const method = this.user.id ? 'PUT' : 'POST';
      const url = this.user.id 
        ? `http://localhost:8000/api/users/${this.user.id}` 
        : 'http://localhost:8000/api/users';

      try {
        const response = await fetch(url, {
          method: method,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.user)
        });

        if (!response.ok) throw new Error(`Error al guardar usuario: ${response.statusText}`);

        this.$emit('user-saved');
        this.resetForm();
      } catch (error) {
        console.error('Error al guardar el usuario:', error);
      }
    },
    resetForm() {
      this.user = {
        id: null,
        name: '',
        email: '',
        password: ''
      };
    },
    setUserToEdit(user) {
      this.user = { ...user, password: '' };
    }
  }
}
</script>

<style src="../assets/styles.css"></style>
