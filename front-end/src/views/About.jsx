import React from 'react'
import '../css-files/About.css'
import ContactForm from '../Components/ContactForm'
import getes from '../assets/aboutpage/majin-vegeta.jpg'


export default function About() {
  return (
    <div>
      <div className="about-padding">

        <div className="title ">
          <h1 className='bg-stone-950/80 rounded-xl p-6 text-stone-100 '>The JE Smart Tech Experience</h1>
        </div>

        <div className="first-box">

            <div className="h-64 mb-3 sm:mb-0 sm:max-w-3xl sm:h-80 h-80 p-4 overflow-scroll bg-stone-100/50 shadow-xl rounded-xl">
              <p className='p1'><b>At JE Smart Tech, we...</b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cumque obcaecati, tempora iusto vero modi dolor perferendis optio reprehenderit rem accusantium sapiente repellendus neque qui aut ratione architecto explicabo culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis placeat officiis sapiente eum assumenda debitis cum itaque in, cumque aperiam consequuntur totam perspiciatis, molestiae sequi saepe aspernatur magni commodi quidem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corporis molestias cumque officia dignissimos quaerat iure. Recusandae, impedit. Quo obcaecati laudantium eveniet distinctio repellat ipsa harum pariatur illo adipisci natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse labore minima optio adipisci dolorem recusandae est sapiente repellat. Minima numquam debitis assumenda optio sint iusto excepturi harum, tempore inventore facilis.</p>
              <br></br>

              <p className='p2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cumque obcaecati, tempora iusto vero modi dolor perferendis optio reprehenderit rem accusantium sapiente repellendus neque qui aut ratione architecto explicabo culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis placeat officiis sapiente eum assumenda debitis cum itaque in, cumque aperiam consequuntur totam perspiciatis, molestiae sequi saepe aspernatur magni commodi quidem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corporis molestias cumque officia dignissimos quaerat iure. Recusandae, impedit. Quo obcaecati laudantium eveniet distinctio repellat ipsa harum pariatur illo adipisci natus. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="person-img-box relative bg-sky-300/60 p-3 shadow-xl rounded-xl overflow-y">
              <img className='shadow-xl rounded-xl' src={getes} alt="" />
              <div className='mt-6 h-64 overflow-scroll shadow-xl rounded-xl p-2'>
                <div className='mb-2'>
                <p className='font-bold text-2xl'>Javier Escobar</p>
                <p className='italic'>CEO and Founder</p>
                </div>
                <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus cum, quisquam nihil modi officiis sapiente impedit officia eveniet, doloremque amet ea velit rem neque veritatis Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus cum, quisquam nihil modi officiis sapiente impedit officia eveniet, doloremque amet ea velit rem neque veritatis</p>
              </div>
            </div>
        </div>

        <div className="second-box">
            {/* img goes here */}
            <div className="para-box-2 rounded-xl bg-stone-100/70">
              <p className='our-goals'>Our Goals</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus cum, quisquam nihil modi officiis sapiente impedit officia eveniet, doloremque amet ea velit rem neque veritatis, et eum ratione. Enim, incidunt. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem doloremque ducimus laudantium? Excepturi itaque, omnis porro beatae facilis, vel debitis doloremque aspernatur nesciunt adipisci recusandae quidem quam laboriosam harum quis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iure illo autem magnam voluptas vero tempore voluptatem expedita eveniet ad temporibus voluptatum, officiis officia, quod facilis omnis ut illum quia.</p>
            </div>
        </div>
      </div>
      
      <ContactForm></ContactForm>
    </div>
  )
}
