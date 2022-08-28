import { ref } from '@vue/reactivity';
import { auth } from "../firebase/config";

let err = ref(null);

let logout= async()=>{
    try {
        await auth.signOut();
       
      } catch (error) {
           err.value = error.message;
      }
}



let useLogout = ()=>{
    return{err,logout}
}

export default useLogout