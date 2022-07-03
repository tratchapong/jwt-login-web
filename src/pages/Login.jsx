import {useState} from "react";
import axios from 'axios'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const hdlSubmit = async (e) => {
    e.preventDefault()
    let res = await axios.post('http://localhost:8080/auth/login', {
      username, password
    })
    let {token} = res.data
    if(!token) { return alert('Unauthorize to Login')}
    console.log(res)
    localStorage.setItem('token', token)
  }
  return (
    <div className="container mt-4 " style={{minWidth : '800px'}}>
      <h1 className="display-5 my-3">Login</h1>
      <form className="w-50 border ms-3 my-3 p-5 rounded" onSubmit={hdlSubmit}>

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
          {/* <div id="usernameInput" className="form-text">
            Enter your login name.
          </div> */}
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
        {/* <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div> */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
