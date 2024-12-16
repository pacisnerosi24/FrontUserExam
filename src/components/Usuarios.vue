<template>
    <div>
        <h1>CRUD de Usuarios</h1>

        <form @submit.prevent="saveUser">
            <input v-model="user.name" placeholder="Nombre">
            <input v-model="user.email" placeholder="Email">
            <input v-model="user.password" placeholder="Contraseña" type="password">
            <button type="submit">Guardar</button>
        </form>

        <h2>Listado de Usuarios</h2>
        <table border="1">
            <tr v-for="user in users" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>
                    <button @click="editUser(user)">Editar</button>
                    <button @click="deleteUser(user.id)">Eliminar</button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: [],
            user: { name: '', email: '', password: '' }
        }
    },
    methods: {
        getUsers() { /* Código para obtener usuarios */ },
        saveUser() { /* Código para guardar usuarios */ },
        deleteUser(id) { /* Código para eliminar usuario */ }
    }
}
</script>
