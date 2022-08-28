<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="logIn">
        <input type="email" placeholder="email" v-model="email">
        <input type="password" placeholder="password" v-model="password">
        <p class="error" v-if="error">{{error}}</p>
        <button>Login</button>
    </form>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import useLogin from '../composation/useLogin';
// import { useRouter } from 'vue-router';

export default {
    setup(props,context){
        let email = ref('');
        let password = ref('');

        let {error,loginForm} = useLogin();

        // let router = useRouter();

        let logIn = async()=>{
          let res = await loginForm(email.value, password.value);
          if(res){
            // router.push({name: "Chatroom"});
            context.emit("enterChatroom");
          }
        }

        return {email,password,logIn,error}
    }

}
</script>

<style>

</style>