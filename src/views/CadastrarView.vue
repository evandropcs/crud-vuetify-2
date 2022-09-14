<template>
  <div>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Cadastrar</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field name="nome" label="Nome" type="text"></v-text-field>
              <v-text-field
                name="email"
                label="Email"
                type="text"
              ></v-text-field>
              <v-text-field
                name="email"
                label="Confirme seu Email"
                type="text"
              ></v-text-field>
              <v-text-field
                id="senha"
                name="senha"
                label="Senha"
                type="password"
              ></v-text-field>
              <v-text-field
                id="senha"
                name="senha"
                label="Confirme sua Senha"
                type="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer
              ><v-btn color="normal" :to="{ name: 'login' }"
                >Voltar</v-btn
              ></v-spacer
            >
            <v-btn color="primary" :to="{ name: 'login' }">Cadastrar</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {}
</script>
