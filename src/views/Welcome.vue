<template>
  <div class="welcome container">
    <div v-if="showLoginForm">
      <Login @enterChatroom="enterChatroom"></Login>
      <p>Not a member? <span @click="showLoginForm = !showLoginForm">Create an account!</span></p>
    </div>
    <div v-else>
      <SignUp @enterChatroom="enterChatroom"></SignUp>
      <p>Already have an account! <span @click="showLoginForm = !showLoginForm">Login Accont</span></p>
    </div>
    
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import { useRouter } from "vue-router"

export default {
  components: {
    Login, SignUp },

  setup(){
    let showLoginForm = ref(true);
    let router = useRouter();
    let enterChatroom = ()=>{
      router.push({name: "Chatroom"});
    }

    return {showLoginForm,enterChatroom}
  }

}
</script>

<style>
.welcome{
    text-align: center;
    padding: 20px 0;
}
/* form style */
.welcome form{
  width: 300px;
  margin: 20px auto;
}
.welcome input{
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}
.welcome span{
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.welcome button{
  margin: 20px auto;
}
</style>