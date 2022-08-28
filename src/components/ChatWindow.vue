<template>
  <div class="chat-window">
    <div class="messages" ref="msgBox">
        <div class="single-message" v-for="message in formatMessages " :key="message.id" >
            <span class="created-at">{{message.created_at}} ago</span>
            <span class="name">{{message.user}}</span>
            <span class="messages">{{message.message}}</span>
        </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { db } from "../firebase/config";
import { computed, onUpdated } from '@vue/runtime-core';
import { formatDistanceToNow } from "date-fns";
export default {
    setup(){
        let msgBox = ref(null);
        let messages = ref([]);

        // auto scrolling feature
        onUpdated(()=>{
            msgBox.value.scrollTop = msgBox.value.scrollHeight;
        })
        
        let formatMessages = computed(()=>{
            return messages.value.map((el)=>{
                let formatDate = formatDistanceToNow(el.created_at.toDate());
                return {...el,created_at:formatDate} //{};
            })//[]
        })
        db.collection('message').orderBy("created_at").onSnapshot((snap)=>{
            let results = [];
            snap.docs.forEach((el)=>{
                let document = {...el.data(),id:el.id};

                // if (el.data().created_at) {
                //     results.push(document);   
                // }

                el.data().created_at && results.push(document);
           })
           
           messages.value = results;
        })

        return{messages,formatMessages,msgBox}
    }
}
</script>

<style>
.chat-window{
    background: #fafafa;
    padding: 15px 20px;
}
.single-message{
    margin: 18px 0;
}
.created-at{
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
}
.name{
    font-weight: bold;
    margin-right: 6px;
}
.messages{
    max-height: 400px;
    overflow: auto;
}
</style>