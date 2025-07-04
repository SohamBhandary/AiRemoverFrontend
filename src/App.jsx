
 import React from 'react';
import Menubar from './Components/Menubar';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import { Route,Routes } from 'react-router-dom';
import {Toaster} from "react-hot-toast"
import UserSynchandler from './Components/UserSynchandler';


const App=()=>{
  
return (
    <>
    <UserSynchandler/>
    <Menubar/>
    <Toaster/>
    
    <Routes>
        <Route path="/" element={<Home/>}>

        </Route>
        
    </Routes>
    <Footer/>
    


    </>



)

}

export default App;