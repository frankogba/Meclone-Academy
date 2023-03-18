import React, {useState} from 'react'


function PortalLogin(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
  return (
    <div className='formInput-container'>
        <button>PARENT LOGIN</button>
        <button>STUDENT LOGIN</button>

    <div className='form-container'>

        <form className='login-form' onSubmit={handleSubmit}>
            <label htmlFor='email'>email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder='example@gmail.com' id='email' name='eamil' />

            <label htmlFor='Password'>password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)}type="password" placeholder='********' id='password' name='password' />

            <button type='submit'>Login</button>

        </form>
            <button className='btn' onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
    </div>

    </div>
  )
}




export default PortalLogin;

