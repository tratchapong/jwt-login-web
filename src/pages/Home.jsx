import React from 'react'

function Home() {
  let isLogin = localStorage.getItem('token')
  return (
    <div>
      <h1>Homepage</h1>
      {isLogin && (
        <div className='text-success'>
        <h1>Welcome, User</h1>
        <h3>Member welcome info</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo ab dolorum enim, magnam nostrum quos. Nihil minus tempore inventore, quia at aliquam officia reprehenderit consectetur! Provident facere molestias explicabo excepturi.</p>
        </div>
      )}
      {!isLogin && (
        <>
        <h1>Welcome, guest</h1>
        </>
      )}
      <h3>Public Info.</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At repudiandae quidem aliquam sed corrupti iure consequuntur, facilis laboriosam harum vel hic ad, fuga est? Asperiores totam ratione voluptatum incidunt ad.</p>
    </div>
  )
}

export default Home