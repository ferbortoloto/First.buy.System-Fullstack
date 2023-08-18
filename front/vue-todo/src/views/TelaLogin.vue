<template>
    <div>
      <h1>Login</h1>
      <!-- Aqui pode adicionar o seu formulário de login e outros componentes relacionados -->
  
      <!-- Exemplo de um botão para buscar todos os usuários (apenas como demonstração) -->
      <button @click="fetchUsers">Fetch Users</button>
      <ul v-if="users">
        <li v-for="user in users" :key="user.id">{{ user.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  // import api from '@/services/api';
  
  export default {
    name: 'UserLogin',
    data() {
      return {
        users: null
      };
    },
    methods: {
      async fetchUsers() {
        try {
          const response = await "http://localhost:8080/".getUsers();
          this.users = response.data;
        } catch (error) {
          console.error("Erro ao buscar usuários:", error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
    /* Aqui pode adicionar os seus estilos CSS para este componente, se necessário */
  </style>
  