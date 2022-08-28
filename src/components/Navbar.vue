<template>
  <nav v-if="user">
    <div>
        <p>Hi, {{user.displayName}}</p>
        <p class="email">Logged in with {{user.email}}</p>
    </div>
    <button @click="logOut">Log out</button>
  </nav>
</template>

<script>
import useLogout from '../composation/useLogout'
import getUser from '../composation/getUser'
export default {
    
setup(){

    let {err,logout} = useLogout();
    let logOut = async()=>{
       await logout();
    //    console.log("logout");
    }
    
    let {user} = getUser();
    
    return{logOut,user}
}
}
</script>

<style>
nav{
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
nav p{
    margin: 2px auto;
    font-size: 16px;
    color: #444;
}
nav p.email{
    font-size:14px;
    color: #999;
}
</style>