<template>
  <div class="login-view">
    <LoginForm :login="handleLogin" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import LoginForm from '@/components/LoginForm.vue'

export default defineComponent({
  name: 'LoginView',
  components: {
    LoginForm
  },

  methods: {
    handleLogin (authInfo) {
      console.log('== LoginView - authInfo ===')
      console.log(authInfo)
      return this.$store.dispatch('login', authInfo)
        .then(() => {
          this.$router.push({ path: '/Top' })
        })
        .catch(err => { throw err })
    }
  }
});
</script>

<style scoped>
.login-view {
  width: 400px;
  margin: auto;
}
</style>