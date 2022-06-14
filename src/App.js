
import './App.css';
import React from 'react'
import {Route,Routes} from 'react-router-dom'
import User from './component/User';
import Info from './component/Info';

function App() {

  const [userinput,setuserinput]=React.useState('')
  
  return (
  
    <div>  
          
    <Routes>
     <Route path='/' element={<User input={[userinput,setuserinput]}/>}/>
     <Route path='/info' element={<Info info={userinput} />}/>
     </Routes>

    </div>
    
  );
}

export default App;
