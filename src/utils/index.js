export default {
   getItem(key){
      let value = localStorage.getItem(key);
      return value
   },
   setItem(key,value){
      localStorage.setItem(key,value)
   }
}