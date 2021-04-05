import React,{useState} from 'react';

function App (){


  const [count, setcount] = useState(0);


  function increament(){
    setcount(c => c + 1);

  }

  function decreament(){
 
    setcount(c => c > 0 ? c - 1 : c)
    
  }

     
    return (
      
      <div>


          <h1>Count : {count}</h1>  <br/> 
          <button onClick={increament}>Increament</button>
          <button onClick={decreament}>Decreament</button>


      </div>
    );
 
}

export default App;
