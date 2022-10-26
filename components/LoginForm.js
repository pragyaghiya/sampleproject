import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/auth';
import loginCred from '../utils/login_data.json';
import "./LoginForm.css"
const LoginForm = () => {
    const navigate = useNavigate()
    const [id,setId] = React.useState('')
    const [email,setEmail] = React.useState('')
    const [pw,setPw] = React.useState('')
    const auth = useAuth()
    const [formError,setFormError] = React.useState({})
    const [isSubmit,setIsSubmit] = React.useState(false)
    const handleId =(event)=>{
        setId(event.target.value)
    }
    
    const handleEmail =(event)=>{
        setEmail(event.target.value)
    }

    const handlePw =(event)=>{
        setPw(event.target.value)
    }
   
    const validate = () => {
        const errors = {}
        errors.id="Invalid Credentials!!"
        return errors
    }


    const submitHandler=(e)=>{
        e.preventDefault();
        setIsSubmit(true)
        console.log([id,email,pw])
        if(loginCred.hasOwnProperty(id)){
            if (loginCred[id].email===email && loginCred[id].password===pw){
                auth.login(loginCred[id].name)
                return navigate("/search")
            }else{
                setFormError(validate())
            }
        }
        else{
            console.log("Wrong id!!")
            setFormError(validate())
        }
    }  
    React.useEffect(()=> {
        console.log(formError)
        if(Object.keys(formError).length===0 && isSubmit){
            console.log(formError)
        }
    }

    )


  return (
    <>
    <div className="main">
        <p className="sign" align="center">LOGIN</p>
        <form className="form1" onSubmit={submitHandler}>
            <input className="tb" type="text" align="center" placeholder="ID" onChange={handleId}></input>
            <input className="tb" type="text" align="center" placeholder="Email" onChange={handleEmail}></input>
            <input className="tb" type="password" align="center" placeholder="Password" onChange={handlePw}></input>
            <p className='err'>{formError.id}</p>
            <button type='submit' className="submit" align="center" >Login</button>
        </form>
    </div>

    </>
  )
}

export default LoginForm