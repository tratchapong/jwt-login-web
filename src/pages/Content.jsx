import {useState, useEffect} from 'react'

function Content() {
  const [isLogin, setIsLogin] = useState('')
  useEffect( ()=> {
    let token = localStorage.getItem('token')
    setIsLogin(!!token)
  }, [])

  return (
    <div>
      {isLogin && (
        <>
          <h2>You can see the private content now!!!</h2>
          <img src="https://picsum.photos/800" alt="" />
        </>
      )}
      {!isLogin && (
        <>
          <h2>Please Login to see the content</h2>
        </>
      )}
    </div>
  )
}

export default Content