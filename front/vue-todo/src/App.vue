<template>
  <v-app>
    <v-navigation-drawer app>
      <!-- Conteúdo do menu lateral, se necessário -->
    </v-navigation-drawer>

    <v-app-bar app>
      <v-toolbar-title>Nome do App</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!-- O componente do formulário entra aqui -->
      <HelloWorld />
    </v-main>

    <v-footer app>
      <span>&copy; 2023 Seu Nome</span>
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  components: {
    HelloWorld
  }
}
</script>

<style>
/* Estilos globais, se necessário */
</style>
