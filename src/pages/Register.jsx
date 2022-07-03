import {useState} from 'react'
import axios from 'axios'

function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const hdlSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {return alert('password not match!!')}
    let res = await axios.post('http://localhost:8080/auth/register', {
      username, password, phoneNumber
    })
    let {token} = res?.data
    if(!token) { return alert('Unauthorize to Login')}
    console.log(res)
    localStorage.setItem('token', token)
    alert(`Register user: ${username} successful`)
    setUsername('')
    setPassword('')
    setConfirmPassword('')
    setPhoneNumber('')
  }

  return (
    <div className="container mt-4 " style={{minWidth : '800px'}}>
      <h1 className="my-3">Register</h1>
      <form className="w-50 border ms-3 my-3 p-3 rounded" onSubmit={hdlSubmit}>
        <div className="mb-3">
          <label htmlFor="inputUsername" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="inputUsername"
            aria-describedby="usernameInput"
            value={username}
            onChange={e=>setUsername(e.target.value)}
          />
          <div id="usernameInput" className="form-text">
            Choose your username.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            value={password}
            onChange={e=>setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputConfirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputConfirmPassword"
            value={confirmPassword}
            onChange={e=>{setConfirmPassword(e.target.value)}}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPhonenumber" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            className="form-control"
            id="inputPhonenumber"
            aria-describedby="phoneNumberInput"
            value={phoneNumber}
            onChange={e=>setPhoneNumber(e.target.value)}
          />

        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register