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
              <v-text-field
                name="usuario"
                label="Usuario"
                type="text"
              ></v-text-field>
              <v-text-field
                id="senha"
                name="senha"
                label="Senha"
                type="password"
              ></v-text-field>
              <p><a>Esqueci a minha senha</a></p>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer
              ><v-btn color="primary" :to="{ name: 'painel' }"
                >Entrar</v-btn
              ></v-spacer
            >
            <v-btn color="error" :to="{ name: 'cadastrar' }">Cadastrar</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.centralizar {
  margin: 100px;
}
</style>
