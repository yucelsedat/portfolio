import './App.css'
import Profile from './assets/profile.jpg'
import Img from './assets/img.png'

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
          <div className="container w-3/5 h-[80%] m-auto px-4 py-10 flex justify-center items-center gap-6">
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
          <div className="container m-auto px-4">
            <h2 className='text-3xl font-semibold '>Projects</h2>
            <div className='w-full flex gap-4 mt-11'>
              <div className='w-1/2 border rounded-md p-4'>
                <img className='w-full'  src={Img} alt="" />
                <h3 className='text-2xl font-semibold mt-8'>Project 1</h3>
                <p className='text-gray-400 text-sm mt-2'>Lorem ipsum dolor sit amet.</p>
                <div className='w-full flex justify-evenly mt-8'>
                  <button className='px-6 py-3 bg-blue-500 border border-blue-400 rounded-full hover:bg-blue-600'>Live preview</button>
                  <button className='px-6 py-3 border rounded-full'>Checkout github</button>
                </div>
              </div>
              <div className='w-1/2 border rounded-md p-4'>
                <img className='w-full'  src={Img} alt="" />
                <h3 className='text-2xl font-semibold mt-8'>Project 1</h3>
                <p className='text-gray-400 text-sm mt-2'>Lorem ipsum dolor sit amet.</p>
                <div className='w-full flex justify-evenly mt-8'>
                  <button className='px-6 py-3 bg-blue-500 border border-blue-400 rounded-full hover:bg-blue-600'>Live preview</button>
                  <button className='px-6 py-3 border rounded-full'>Checkout github</button>
                </div>
              </div>
              
            </div>
            <div className='w-full flex gap-4 mt-11'>
              <div className='w-1/2 border rounded-md p-4'>
                <img className='w-full'  src={Img} alt="" />
                <h3 className='text-2xl font-semibold mt-8'>Project 1</h3>
                <p className='text-gray-400 text-sm mt-2'>Lorem ipsum dolor sit amet.</p>
                <div className='w-full flex justify-evenly mt-8'>
                  <button className='px-6 py-3 bg-blue-500 border border-blue-400 rounded-full hover:bg-blue-600'>Live preview</button>
                  <button className='px-6 py-3 border rounded-full'>Checkout github</button>
                </div>
              </div>
              <div className='w-1/2 border rounded-md p-4'>
                <img className='w-full'  src={Img} alt="" />
                <h3 className='text-2xl font-semibold mt-8'>Project 1</h3>
                <p className='text-gray-400 text-sm mt-2'>Lorem ipsum dolor sit amet.</p>
                <div className='w-full flex justify-evenly mt-8'>
                  <button className='px-6 py-3 bg-blue-500 border border-blue-400 rounded-full hover:bg-blue-600'>Live preview</button>
                  <button className='px-6 py-3 border rounded-full'>Checkout github</button>
                </div>
              </div>
              
            </div>
          </div>
          
        </section>

        {/* TECHONOLOGİES SECTİON*/}
        <section id='contact' className='mt-12'>
          <div className="container m-auto px-4">
            <h2 className='text-3xl font-semibold '>Techonologies</h2>
            <div className='mt-14 flex flex-col gap-6'>
              <div>
                <div className='flex justify-between items-center'>
                  <h2 className='text-lg font-semibold'>HTML</h2>
                  <p className='text-gray-500'>advanced</p>
                </div>
                <span className='w-[90%] h-2 bg-blue-500 block rounded-md mt-2'></span>
              </div>
              <div>
                <div className='flex justify-between items-center '>
                  <h2 className='text-lg font-semibold'>CSS, Sass & Bootstrap</h2>
                  <p className='text-gray-500'>advanced</p>
                </div>
                <span className='w-[50%] h-2 bg-blue-500 block rounded-md mt-2'></span>
              </div>
              <div>
                <div className='flex justify-between items-center'>
                  <h2 className='text-lg font-semibold'>Javascript</h2>
                  <p className='text-gray-500'>advanced</p>
                </div>
                <span className='w-[60%] h-2 bg-blue-500 block rounded-md mt-2'></span>
              </div>
              <div>
                <div className='flex justify-between items-center'>
                  <h2 className='text-lg font-semibold'>React</h2>
                  <p className='text-gray-500'>advanced</p>
                </div>
                <span className='w-[30%] h-2 bg-blue-500 block rounded-md mt-2'></span>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id='contact' className='mt-12'>
          <div className="container m-auto px-4">
            <h2 className='text-2xl font-semibold '>Projects</h2>
            
          </div>
        </section>
      </main>
    </>
  )
}
