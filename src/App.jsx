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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae similique, quas ullam quod facilis veritatis quia neque qui praesentium iste saepe ipsa quidem assumenda, necessitatibus eius eligendi. Unde, quisquam odio!</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt perspiciatis odit possimus id facere veritatis maiores? Quo hic voluptates eaque exercitationem velit, eveniet officia maxime, sapiente praesentium sed dolorum facilis dolor quos harum corrupti. Amet nobis eius perspiciatis itaque repellat porro voluptatem, dicta voluptatum iusto suscipit corporis laboriosam commodi cupiditate officiis neque, nostrum molestiae voluptas natus dignissimos? Sed consectetur illo ipsum dolorum quis maiores sit nemo quos, ut aspernatur? Perferendis sit maiores ullam magni saepe autem qui doloremque reprehenderit tempore voluptatum soluta, porro dolor eveniet rerum sint fugiat quo pariatur hic dolores quae repellendus ad aperiam. Dolorum consectetur provident, odio impedit suscipit culpa vero laboriosam distinctio odit incidunt nihil delectus excepturi quia voluptatibus dolores aliquam, reiciendis omnis! Incidunt laborum unde fugit qui porro a voluptatum consequuntur odio amet, aliquam quibusdam, tempora modi. Voluptas culpa fugit labore doloribus accusantium fuga explicabo nostrum maxime, expedita facilis laboriosam tenetur aut illo rem iure soluta, quam ad provident molestiae illum atque a totam quaerat placeat. Aspernatur ipsa praesentium eius odit ipsam sapiente, facilis deserunt sit. Nostrum qui earum accusamus, consequatur, dignissimos veritatis, fuga non eveniet odit nobis reiciendis. Veritatis odio asperiores, accusamus quaerat mollitia voluptatibus, laborum cumque maiores quidem soluta perspiciatis cum nostrum tenetur.</p>
        </section>
        <section id='contact'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae similique, quas ullam quod facilis veritatis quia neque qui praesentium iste saepe ipsa quidem assumenda, necessitatibus eius eligendi. Unde, quisquam odio!</p>
        </section>
      </main>
    </>
  )
}
