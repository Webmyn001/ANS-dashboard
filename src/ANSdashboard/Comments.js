import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";

import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect"


function Comments() {

  // this is to go back to users in order to post comment 

  const deleteUser = async (id) => {
    try{
      await axios.delete(`https://easy-crown-bull.cyclic.app/api/comment/${id}`);
      alert("Comment deleted.")
        }catch (err) 
    {
    console.log(err);
    alert("Unable to delete, Kindly refresh this page")
     }
     getComments();
  }
  const [getcomments, setgetcomments] =useState([])

  const getComments = async ()=> {
    axios.get("https://easy-crown-bull.cyclic.app/api/comment/")
    .then((res)=> setgetcomments(res.data) )
    .catch((err)=> console.log(err))
    
  }

  
useEffect(()=> {
  AOS.init({duration:2000})

},[])


  useEffect(()=>{
    getComments()
  },[])
  return (
    <div className='bg-gradient-to-t min-h-screen from-white to-[#fffadd] flex flex-col items-center '>
      

      <h1 className='font-bold text-xl pt-5 text-[#7f030d] text-center'> Comments from the Users.</h1>
      {
        getcomments.map((comment)=>(
          <div className="shadow-sm 
          p-5  m-3 border-l-8 border-2 border-[#7f030d] flex flex-col justify-between items-center rounded-lg"key={comment._id} data-aos="zoom-in">
               
                
           
            <ol className="text-xl font-semiold tracking-wide text-[#7f030d]">
                <li> <span className="text-center font-bold text-[#7f030d]  capitalize"> {comment.Name}</span> </li>
                <li>  <span className=" text-center font-semibold text-[#7f030d] " >{comment.School}</span> </li>
                <li>   <span className="italic text-center font-bold text-[#7f030d] " >{comment.Department} {comment.Level}</span></li>
                <li> <span className=" text-center text-[#7f030d] "><Typewriter 
             options={{
              autoStart:true,
              loop:true,
              delay: 50,
              strings:`${comment.Comment}`
             }}
           />
           </span> </li>

                
    
            </ol>

            <button onClick={()=>deleteUser(comment._id)}
             className="bg-[#7f030d] text-[#fefbe9] mt-3 rounded-md px-2 py-1">Delete</button>
        </div>
        ))
      
      }
    </div>
  )
}

export default  Comments


