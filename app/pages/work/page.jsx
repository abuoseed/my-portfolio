'use client'

import {motion} from 'framer-motion'
import React ,{useState} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css"
import { BsArrowUpRight ,BsGithub } from 'react-icons/bs'
import { TooltipContent, Tooltip, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import Link from 'next/link'
import Image from 'next/image'

import WorkSliderBtns from '@/components/worksliderbtns';

const projects=[
  {
    num: '01',
    category:'frontend', 
    title:'moviesapp',
    description:'This is a modern and responsive Movie App built using HTML, CSS, and JavaScript, with Tailwind CSS for styling.The app provides users with an intuitive interface to explore movies, view details, and experience a smooth, visually engaging design.',
    stack:[{name:'html 5'},{name:'Css 3'},{name:'javascript'},{name:'tailwand.css'}],
    image:'/assets/work/project-2.png',
    live:'https://movies-app-javascript-native-vqrc-git-main-abuoseeds-projects.vercel.app?_vercel_share=rqKHSPAnmoXUs5KhuEno4Wv5C3X7jBfD',
    github:"https://github.com/abuoseed/movies-app-javascript-native/tree/main/Movies_App-master"
  },
  {
    num: '02',
    category:'fullstack', 
    title:'e-commerce',
    description:'This is a modern and fully responsive E-Commerce Web Application built with React.js.The project delivers a smooth shopping experience with dynamic product management, real-time data handling, and a clean, elegant user interface.',
    stack:[{name:'react.js'},{name:'tailwind.css'},{name:'supabase'}],
    image:'/assets/work/project-1.png',
    live:'https://baaskett.netlify.app/',
    github:"https://github.com/ibrahimeltbakh/Basket"
  },
  {
    num: '03',
    category:'fullstack', 
    title:'restaurant',
    description:'This is a modern, fully responsive restaurant website built with Next.js.The project combines elegant design, smooth animations, and a seamless user experience using cutting-edge frontend technologies.',
    stack:[{name:'html 5'},{name:'Css 3'},{name:'next.js'},{name:'supabase'},{name:'shadcn/ui'}],
    image:'/assets/work/project-3.png',
    live:'https://restaurant-project-git-main-abuoseeds-projects.vercel.app?_vercel_share=AtEemxbDQrWsl3P4NjpaipIINwqV3Sfy',
    github:"https://github.com/abuoseed/restaurant-project"
  },
  {
    num: '04',
    category:'frontend', 
    title:'waqeack',
    description:'Waq3ak is a modern web platform designed to offer a variety of digital and electronic services.The project focuses on creating a sleek, professional interface and smooth user interactions using a modern frontend stack.Although the site is not yet fully responsive, it demonstrates a strong foundation for scalability and performance.',
    stack:[{name:'html 5'},{name:'Css 3'},{name:'next.js'},{name:'typescript'}],
    image:'/assets/work/project-4.png',
    live:'https://waqeack-git-main-abuoseeds-projects.vercel.app',
    github:"https://github.com/abuoseed/next-app-with-typesctipt"
  },
 ]
  
const Work = () => {
  const [project, setproject]=useState(projects[0])

const handelslidechange=(swiper)=>{
  const currentIndex=swiper.activeIndex 
  setproject(projects[currentIndex])

}

  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1,transition:{delay:2.4, duration:0.4, ease:'easeIn'} }} className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>

              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-emerald-500 transition-all duration-500 capitalize'>{project.category} project</h2>
              <p className='text-white/60'> {project.description}</p>

              <ul className='flex gap-4'>
                {project.stack.map((item, index)=>{
                  return <li key={index} className='text-xl text-emerald-500'>
                    {item.name}
                    {/* remove the last comma */}
                    {index !== project.stack.length - 1 && ','}

                  </li>

                })}
              </ul>
              <div className="border border-white/20 "></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                          <BsArrowUpRight className='text-white text-3xl group-hover:text-emerald-500'/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                </Link>


                <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                          <BsGithub className='text-white text-3xl group-hover:text-emerald-500'/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                </Link>
              </div>
              </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
            spaceBetween={30}
            slidePerview={1}
            className='xl:h-[520px] mb-12'
            onSlideChange={handelslidechange}
            >
              {projects.map((project, index)=>{
                return  <SwiperSlide key={index} className='w-full'>
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className=""></div>
                    <div className="">
                      <Image src={project.image} alt={project.title} width={900} height={600} className='w-full h-full object-cover group-hover:scale-105 transition-all duration-500'/>
                    </div>
                  </div>
                </SwiperSlide>
              })}
              <WorkSliderBtns containerStyles='flex gap-2 absolute right-0 botton-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
                              btnStyles='bg-emerald-500 hover:bg-emerald-500-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center transition-all'
                              iconsStyles='flex justify-center items-center'/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work
