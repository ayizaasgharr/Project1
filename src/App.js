import { Link } from "react-router-dom"
import { useState, useRef } from 'react'



function LogIn() {
    const userEmail = useRef()
    const password = useRef()

    const [errorMessage, setErrorMessage] = useState('')
    const [emailMessage, setEmailErrorMessage] = useState('')
    const [passwordError, setPasswordErrorMessage] = useState('')




    const emailValidation = () => {
        let emailValid = userEmail.current.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        if (!emailValid) {
            setEmailErrorMessage('Invalid Email')
        }
        else {
            setEmailErrorMessage('')
        }
    }

    const passwordValidation = () => {
        if (password.current.value.length < 6) {
            setPasswordErrorMessage('Password length is less than 8')
        }
        else {
            setPasswordErrorMessage('')
        }
    }
    

    return (
        <div>
            <h1 className='spacing'>Login</h1>
            <h4 className='errorMessage'>{errorMessage}</h4>
            <label className='spacing'>Enter Your Email</label><br />
            <input type="text" name="Email" className='spacing' ref={userEmail} onBlur={emailValidation} /><br />
            <p className='errorMessage'>{emailMessage}</p>
            <label className='spacing'>Enter Your Password</label><br />
            <input type="password" name="Password" className='spacing' ref={password} onBlur={passwordValidation} /><br />
            <p className='errorMessage'>{passwordError}</p>
            <input type="submit" value="SignIn" className="spacing"  />
            <h4 className='spacing'>Don't have an account? <Link to="SignUp"> SignUp</Link></h4>

        </div>
    )

}
export default LogIn;