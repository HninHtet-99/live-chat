<template>
    <div>
        <form>
            <textarea placeholder="text here and hit enter to send" @keypress.enter="sendMessage" v-model="message"></textarea>
        </form>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import getUser from '@/composation/getUser'
import { timestamp } from "../firebase/config";
import useCollection from "../composation/useCollection"

export default {
setup(){
    let message = ref('');
    let {user} = getUser();
    let {error,addDoc} = useCollection("message");

    let sendMessage = async()=>{
        let chat = {
            message: message.value,
            user: user.value.displayName,
            created_at: timestamp()
        }
        // console.log(chat)
        await addDoc(chat);
        message.value = '';
        
    }

    return{message,sendMessage}
}
}
</script>

<style>
form{
    margin: 10px;
}
textarea{
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
}
</style>