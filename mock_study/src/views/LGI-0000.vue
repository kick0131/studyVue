<template>
  <v-app id="inspire">
    <v-app-bar absolute app dark color="#008348">
      <v-toolbar-title class="headline text-uppercase">管理コンソール</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="#008348" dark flat>
                <v-toolbar-title>ログイン</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="メールアドレス"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="email"
                  />

                  <v-text-field
                    id="password"
                    label="パスワード"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="#008348" dark @click.once="signin()" :key="buttonLogin">ログイン</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    email: "",
    password: "",
    currentUser: null,
    admin: {
      email: ""
    },
    buttonLogin: 1
  }),

  props: {
    login: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    signin() {
      //
      this.$emit("input", true);
    },
    resetPassword() {
      //
    }
  }
};
</script>