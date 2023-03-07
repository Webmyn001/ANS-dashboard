import React from 'react'
import Header from './ANSdashboard/Header'
import {BrowserRouter as Router , Route, Routes, } from "react-router-dom";
import DashboardApp from './ANSdashboard/DashboardApp';
import Post from './ANSdashboard/Post';
import Editpost from './ANSdashboard/Editpost';
import Comments from './ANSdashboard/Comments';
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from './ANSdashboard/Footer';
import Fulldetails from './ANSdashboard/Fulldetails';





function App() {
  return (
    <div>
       <Router>
      <Header/>
      <Routes>
         
                  
                  
                    {/* dashboard */}
         <Route exact path="/" element = {<DashboardApp/>}></Route>
         <Route exact path="/post" element = {<Post/>}></Route>
         <Route exact path="/editpost/:id" element = {<Editpost/>}></Route>
         <Route exact path="/Comments" element = {<Comments/>}></Route>
         <Route exact path="/fulldetails/:id" element = {<Fulldetails/>}></Route>

     
      </Routes>
     <Footer/>
           
            

          
      </Router>
       
     
          
             
            

          
     
     
    
    
    </div>
  )
}

export default App