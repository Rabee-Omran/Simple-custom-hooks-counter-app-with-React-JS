import React from 'react';
import useCount from './hooks/useCount';


function App (){

  const {count, increament, decreament} = useCount();
     
    return (
      
      <div>


          <h1>Count : {count}</h1>  <br/> 
          <button onClick={increament} >Increament</button>
          <button onClick={decreament} >Decreament</button>


      </div>
    );
 
}

export default App;
