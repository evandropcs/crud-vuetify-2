<template>
  <div>
    <v-layout align-center justify-center class="centralizar">
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Entrar</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <!-- <v-btn
                :loading="loading"
                :disabled="!valid"
                color="secondary"
                class="mr-4"
                x-large
                block
                @click="login"
                >Continuar <v-icon class="pl-3">fa-arrow-right</v-icon></v-btn
              > -->
              <v-text-field
                name="usuario"
                label="Usuario"
                type="text"
                v-model="username"
              ></v-text-field>
              <v-text-field
                id="senha"
                name="senha"
                label="Senha"
                type="password"
                v-model="password"
              ></v-text-field>

              <p><a>Esqueci a minha senha</a></p>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer
              ><v-btn color="primary" @click="login">Entrar</v-btn></v-spacer
            >
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import AuthApi from '@/api/auth.api.js'

export default {
  data: () => {
    return {
      loading: false,
      valid: false,
      username: '',
      password: '',
      snackbar: {
        show: false,
        message: '',
      },
    }
  },
  methods: {
    login() {
      this.loading = true
      AuthApi.login(this.username, this.password)
        .then((user) => {
          console.log('login ok', user)
          this.saveLoggedUser(user)
          this.$router.push({ name: 'taskList' })
        })
        .catch((error) => {
          console.log('login falhou', error)
          this.snackbar.message = 'Usuario ou senha invalida'
          this.snackbar.show = true
        })
        .finally(() => {
          this.loading = false
        })
    },
    saveLoggedUser(user) {
      window.localStorage.setItem('loggedUser', user.id)
      window.localStorage.setItem('loggedUserToken', user.token)
    },
  },
}
</script>

<style scoped>
.centralizar {
  margin: 100px;
}
</style>
