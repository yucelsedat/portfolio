import './App.css'
import Profile from './assets/profile.jpg'

export default function App() {
  return (
    <>
      <header>
        <div className="container m-auto">
          <div className="flex justify-between">
            <div>
              <h1 className='font-bold text-2xl'>Sedat Portfolio</h1>
            </div>
            <div>
              <ul className='flex gap-4'>
                <li>
                  <a className='text-gray-400 hover:text-white' href="#projects">Projects</a>
                </li>
                <li>
                  <a className='text-gray-400 hover:text-white' href="#about">About</a>
                </li>
                <li>
                  <a className='text-gray-400 hover:text-white' href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main>
        {/* INTRO BANNER SECTİON */}
        <section>
          <div className="container w-3/5 m-auto px-4 py-10 flex justify-center items-center gap-6">
            <div className='flex-1'>
              <h2 className='font-bold text-4xl '>Hello, I'm Sedat</h2>
              <h2 className='font-bold text-4xl text-blue-400'>Jr.Full Stack Developer</h2>
              <p className='mt-4 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, ab vel a obcaecati at iste commodi quo laborum facilis possimus animi officiis cumque ducimus quaerat, beatae quibusdam harum non dolor quos modi amet ea!.</p>
            </div>
            <div className='w-1/5 aspect-square flex-initial rounded-full overflow-hidden'>
              <img src={Profile} className='object-cover h-full' />
            </div>
          </div>
        </section>

        {/* PROJECTS SECTİON */}
        <section id='projects'>
          <div className="container m-auto">
            <h2>Projects</h2>
            <div className='flex'>
              <div>
                
              </div>
            </div>
          </div>
          
        </section>
        <section id='contact'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae similique, quas ullam quod facilis veritatis quia neque qui praesentium iste saepe ipsa quidem assumenda, necessitatibus eius eligendi. Unde, quisquam odio!</p>
        </section>
      </main>
    </>
  )
}
