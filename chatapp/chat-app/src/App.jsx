import React, { useContext, useEffect } from 'react'
import { Routes,Route, useNavigate } from 'react-router-dom'
import Login from './pages/login/Login'
import Chat from './pages/chat/Chat'
import ProfileUpdate from './pages/profileUpdate/ProfileUpdate'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './config/firebase'
import { AppContext } from './context/AppContext'


const App = () => {
 const navigate = useNavigate();

 const {loadUserData } = useContext(AppContext)

  useEffect(()=>{
       onAuthStateChanged(auth,async(user)=>{
        if(user){
          // navigate('/chat')
          // console.log(user)
          await loadUserData(user.uid)
        }else{
          navigate('/')
        }
       })
  },[])

  return (
    <>
    <ToastContainer/>
      <Routes>
        <Route exact path='/' element={<Login/>} />
        <Route exact path='/chat' element={<Chat/>} />
        <Route exact path='/profile' element={<ProfileUpdate/>} />
      </Routes>
    </>
  )
}

export default App
