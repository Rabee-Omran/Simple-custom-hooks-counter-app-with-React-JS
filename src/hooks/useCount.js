import {useState} from 'react';


export default function useCount(){

  const [count, setcount] = useState(0);

  function increament(){
    setcount(c => c + 1);

  }

  function decreament(){
 
    setcount(c => c > 0 ? c - 1 : c)
    
  }

  return {
    count, increament, decreament
  }
}