<template>
  <div>
    <h2>Sign Up</h2>
    <form @submit.prevent="signUp">
        <input type="text" placeholder="Enter Name" v-model="name">
        <input type="email" placeholder="email" v-model="email">
        <input type="password" placeholder="password" v-model="password">
        <p v-if="err" class="error">{{err}}</p>
        <button>Sign Up</button>
    </form>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import useSignup from '../composation/useSignup';

export default {
    setup(props,context){
        let name = ref("");
        let email = ref('');
        let password = ref('');

        let {err,createAccount} = useSignup();

        let signUp = async()=>{
        let res = await createAccount(email.value,password.value,name.value)
        if (res) {
          // console.log(res.user);
            context.emit("enterChatroom");
          
        }
        }

        return {name,email,password,signUp,err}
    }

}
</script>

<style>

</style>