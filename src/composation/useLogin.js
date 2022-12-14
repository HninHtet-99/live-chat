import { ref } from "vue";
import { auth } from '../firebase/config';

let error = ref(null);

let loginForm = async(email,password)=>{
    try {
        let res = await auth.signInWithEmailAndPassword(email,password)
        if(!res){
          throw new Error("Can't login account!")
        }
        return res;
  } catch (err) {
    error.value = err.message;
  }
}


let useLogin = ()=>{
    return {error,loginForm}
}

export default useLogin;