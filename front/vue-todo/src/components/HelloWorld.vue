<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>TelaLogin</v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid">
              <v-text-field
                label="E-mail"
                v-model="email"
                :rules="emailRules"
                required
              ></v-text-field>
              <v-text-field
                label="Senha"
                v-model="password"
                type="password"
                :rules="passwordRules"
                required
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="submit">Entrar</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    email: '',
    password: '',
    emailRules: [
      v => !!v || 'E-mail é obrigatório',
      v => /.+@.+/.test(v) || 'E-mail deve ser válido'
    ],
    passwordRules: [
      v => !!v || 'Senha é obrigatória'
    ]
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // Aqui você pode enviar os dados ao seu backend
        console.log('E-mail:', this.email, 'Senha:', this.password);
      }
    }
  }
}
</script>
