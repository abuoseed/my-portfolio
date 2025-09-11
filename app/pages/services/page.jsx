'use client'
import Link from "next/link"
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion"
const services=[
  {
    num:'01',
    title:'Frontend Developer',
    description :'I specialize in building modern, responsive, and user-friendly web applications using HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React, and Next.js. I also work with powerful libraries and tools like Redux, React Query, Motion, and Shadcn/UI to create smooth, dynamic, and scalable user experiences. ',
    href:''
},
  {
    num:'02',
    title:'Backend Developer',
    description :'I focus on building secure, efficient, and scalable server-side applications using Python, Django, and Django REST Framework. I work with PostgreSQL to design and manage robust databases, ensuring smooth data flow and reliable API integrations for modern web applications. ',
    href:''
},
  {
    num:'03',
    title:'Logo Design',
    description :'I create modern and meaningful logos that reflect brand identity and communicate ideas through clean, creative, and memorable designs. My focus is on delivering simple yet impactful visuals that leave a lasting impression. ',
    href:''
},
  {
    num:'04',
    title:'Instructor Web Development',
    description :'I guide learners in mastering the fundamentals and advanced concepts of front-end and back-end development, covering technologies like HTML, CSS, JavaScript, React, Next.js, Python, Django, and REST APIs. I focus on practical, project-based learning to help students build real-world applications and gain industry-ready skills.',
    href:''
},
]

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto"> 
        <motion.div
          initial={{opacity:0}}
          animate={{opacity:1, transition:{delay:2.4, duration:0.4, ease:'eseaIn'}}}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((item, index)=>
         
            <div key={index} className="flex flex-1 flex-col justify-center gap-6 group">
              <div className="w-full flex justify-between items-center ">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{item.num}</div>
                <Link href={item.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-emerald-500 transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-emerald-500 transition-all duration-500">{item.title}</h2>
              <p className="text-white/60">{item.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          
          )}


        </motion.div>
      </div>
    </section>
  )
}

export default Services
