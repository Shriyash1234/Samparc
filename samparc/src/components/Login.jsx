import React from 'react'
import Header from './header'
import Registration from './registeration'
const Login = () => {
    setTimeout(()=>{
        document.getElementsByClassName('cm-header-wrap')[0].style.filter = 'brightness(40%)'
    },300)
  
  return (
    <section className='Login'>
        <Header/>
        <Registration/>
    </section>
  )
}

export default Login
