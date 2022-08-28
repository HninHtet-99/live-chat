import { ref } from "vue";
import {auth} from '../firebase/config';

let err = ref(null);

let createAccount = async(email,password,name)=>{
    try {
        let docs = await auth.createUserWithEmailAndPassword(email,password)
        if(!docs){
          throw new Error("could not create new account!")
        }
        docs.user.updateProfile({displayName:name})
        // console.log(docs.user);
        return docs;
        } catch (error) {
            err.value = error.message;
        }
}

let useSignup = ()=>{
    
    return {err,createAccount}
}

export default useSignup;