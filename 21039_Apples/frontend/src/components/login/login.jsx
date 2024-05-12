import './login.css'
import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom"



export function Login() {

  const navigate=useNavigate()
  const[info, setinfo]=useState({
    nickname:"",
    password:""
  })
  
  
  const create =async e=>{
    e.preventDefault()
    try{
      await axios.post("http://localhost:3306/",info)
      navigate("/")
    }catch(err){
      console.log(err)
    }
  }

  return (
    <>
      <div className='enter'>
          <div className='diventer'>

                <div>
                  <span>Никнейм</span>
                  <input type="text" placeholder='Никнейм' name='nickname'/>
                </div>
                <div>
                  <span>Пароль</span>
                  <input type="text" placeholder='Пароль' name='password'/>
                </div>
                <button onClick={create}>Создать</button>
          </div>
      </div>
    </>
  )
}

