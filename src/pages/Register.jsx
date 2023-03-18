import React, {useState} from 'react';


function Register(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState(''); 
    const [confirmpass, setConfirmpass] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

  return (
    <div className='form-container'>
        <h2>Register</h2>

        <form  className='register-form' onSubmit={handleSubmit}>
            <label htmlFor='name'>Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder='full name' />

            <label htmlFor='address'>Adress</label>
            <input value={address} name="adddress" onChange={(e) => setAddress(e.target.value)} id="address" placeholder='address' />

            <label htmlFor='email'>email</label>
            <input value={email} name="email" onChange={(e) => setEmail(e.target.value)} id="email" placeholder='example@gmail.com' />

            <label htmlFor='password'>Password</label>
            <input value={password} name="password" onChange={(e) => setPassword(e.target.value)} id="password" placeholder='********' />

            <label htmlFor='confirmpass'>Confirm password</label>
            <input value={confirmpass} name="confirmpass" onChange={(e) => setConfirmpass(e.target.value)} id="confirmpass" placeholder='*********' />

           
        </form>
        <button className='link-btn' onChange={() => props.onFormSwitch('login')}>Already have account? Login here </button>
      
    </div>
  )
}





export default Register;

