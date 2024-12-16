<template>
  <div id="app">
    <header>
      <h1>Gestión de Usuarios</h1>
    </header>

    <UserForm @user-saved="getUsers" />
    <UserList :users="users" @user-edited="editUser" @user-deleted="getUsers" />
  </div>
</template>

<script>
import UserForm from './components/UserForm.vue';
import UserList from './components/UserList.vue';

export default {
  data() {
    return {
      users: []
    }
  },
  components: {
    UserForm,
    UserList
  },
  methods: {
    async getUsers() {
      try {
        const response = await fetch('http://localhost:8000/api/users');
        this.users = await response.json();
      } catch (error) {
        console.error('Error al obtener los usuarios:', error);
      }
    },
    editUser(user) {
      this.$refs.userForm.setUserToEdit(user);
    }
  },
  mounted() {
    this.getUsers();
  }
}
</script>

<style src="./assets/styles.css"></style>
