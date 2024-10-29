import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [profiles , setProfiles] = useState([
    {
      name: 'Kaiser',
      url: 'https://i.pinimg.com/736x/b3/1e/64/b31e64f86809038abde8a9a3936877c0.jpg'
    },
    {
      name: 'Isagi',
      url: 'https://i.pinimg.com/736x/cf/3a/e5/cf3ae59448715e00d395b34fb5abe869.jpg',
    },
    {
      name: 'Rin',
      url: 'https://i.pinimg.com/736x/ce/55/7f/ce557f0307ae8ab10c43409a06530475.jpg',
    },
    {
      name: 'Barou',
      url: 'https://i.pinimg.com/564x/8a/59/c8/8a59c8b4d5783035aeac74eaa12ccffe.jpg',
    },
    {
      name: 'Nagi',
      url: 'https://i.pinimg.com/736x/80/a3/a5/80a3a5338408831552eeca15ed8967d6.jpg',
    },

  ])
  return (
    <>
      <div className='flex-col w-full '>
        <h1 className='text-[3.5vw] text-white text-center my-[.67em]'>Qui est-ce ?</h1>
        <ul className='flex gap-[2vw] justify-center'>

          {
            profiles.map((profile, index)=>{
              return(
                <li>
                  <a href="">
                    <div style={{backgroundImage: `url(${profile.url})`}} className='h-[10vw] w-[10vw] bg-cover rounded-[4px]'></div>
                    <span className='text-white text-center block my-[.6em] text-[1.3vw] text-grey'>{profile.name}</span>
                  </a>
              </li>
              )
            })
          }
         
        </ul>
      </div>
    </>
  )
}

export default App
