import { useState } from 'react'
import CardImage from './assets/illustration-article.svg'
import Avatar from './assets/image-avatar.jpg'
import './App.css'

function App() {
  

  return (
    <>
      <section className='card-container'>
       <div className='card-wrapper'>
        <div className='card-main'>
          <div className='img-container'>
            <img src={CardImage} alt="Card-Image" />
          </div>
          <div className='text-container'>
            <div className='btn-container'>
            <a href="#">Learning</a>
            </div>
            <p>Published 21 Dec 2023</p>
            <h4>HTML & CSS foundations</h4>
            <p>These languages are the backbone of every
              website, defining sructure, content, and
              presentation.
            </p>
            <div className='card-end'>
              <img src={Avatar} alt="Avatar" />
              <p>Greg Hooper</p>
            </div>
          </div>
        </div>
       </div>
      </section>

      
     
    </>
  )
}

export default App
