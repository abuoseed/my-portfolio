"use client";
import { FaHtml5, FaCss3, FaReact, FaGithub, FaBootstrap, FaFigma, FaNodeJs, FaJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si"

const about = {
  title: 'about me',
  description:
    'A brief introduction about who I am as a developer — passionate about crafting modern, user-friendly web experiences. I enjoy turning ideas into reality through clean code, creative design, and thoughtful functionality.',
  info: [
    {
      feilName: 'name',
      feilValue: 'Abdullah Ali Ebrahim'

    },
    {
      feilName: 'Phone',
      feilValue: '01080243774'

    },
    {
      feilName: 'Experience',
      feilValue: '1+ years'

    },
    {
      feilName: 'Skype',
      feilValue: 'abdullah.01'

    },
    {
      feilName: 'name',
      feilValue: 'abdullah'

    },
    {
      feilName: 'Nationality',
      feilValue: 'Egyption'

    },
    {
      feilName: 'email',
      feilValue: 'abdullahali24th@gmail.com'

    },
    {
      feilName: 'freelance',
      feilValue: 'available'

    },
    {
      feilName: 'languges',
      feilValue: 'english, aribc'

    },
  ]
}
const myprojects = {
  icon: 'assets/resume/badge.svg',
  title: 'My Projects',
  description: 'A showcase of my featured projects, highlighting creativity, technical skills, and problem-solving abilities. Each project demonstrates my experience with modern web technologies and my passion for building clean, functional, and visually appealing interfaces.',
  items: [
    {
    project: 'Movies App',
    position:'front end devloper',
    duration:'12 days'
  },
    {
    project: 'baaskett Ecommerce.',
    position:'full stack devloper',
    duration:'27 days'
  },
    {
    project: 'restaurant app.',
    position:'full stack devloper',
    duration:'23 days'
  },
    {
    project: 'waQeack.',
    position:'front end devloper',
    duration:'8 days'
  },
]
}
const education = {
  icon: 'assets/resume/cap.svg',
  title: 'my education',
  description: 'A summary of my academic background and continuous learning journey in technology and development. This section reflects my commitment to growing my knowledge and staying up to date with the latest web trends and best practices.',
  items: [
    {
      institution: 'online course with AMIt learning',
      degree: "full stack web development bootcamp",
      duration: '2203-2024',
    },
    {
      institution: 'online course with manara ',
      degree: "frontend with react  bootcamp",
      duration: '2203-2024',
    },
  ]
}
const skills = {

  title: 'my skills',
  description: 'A collection of my core technical and creative skills, ranging from frontend development and UI design to backend integration. These skills reflect my ability to deliver high-quality, responsive, and scalable digital solutions.',
  skillsList: [
    {
      icon: <FaHtml5 />,
      name: 'html 5',
    },
    {
      icon: <FaCss3 />,
      name: 'css 3',
    },
    {
      icon: <FaJs />,
      name: 'javascript',
    },
    {
      icon: <FaReact />,
      name: 'react.js',
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js',
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind.css',
    },
    {
      icon: <FaBootstrap />,
      name: 'Bootstrap.css',
    },
    {
      icon: <FaNodeJs />,
      name: 'node.js',
    },
    {
      icon: <FaFigma />,
      name: 'figma',
    },
    {
      icon: <FaGithub />,
      name: 'Github',
    },
  ]

}
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";


const Resume = () => {
  return <motion.div 
  initial={{opacity:0}} 
  animate={{opacity:1, transition:{delay:2.4, duration:0.4, ease:'easeIn'}}} 
  className="min-h-[80vh] flex items-center justify-center py-12 lg:py-0"
  >
    <div className="container mx-auto">
      <Tabs 
      defaultValue='experience'
      className='flex flex-col lg:flex-row gap-[60px]'
      >
        <TabsList className='flex flex-col w-full max-w-[380px] mx-auto lg:mx-0 gap-6'>
          <TabsTrigger value='experience'>My Projects</TabsTrigger>
          <TabsTrigger value='education'>Education</TabsTrigger>
          <TabsTrigger value='skills'>Skills</TabsTrigger>
          <TabsTrigger value='about'>About me</TabsTrigger>
        </TabsList>
        <div className="min-h-[70vh] w-full">

          {/* my projects */}
          <TabsContent value='experience' className='w-full'>
            <div className="flex flex-col gap-[30px] text-center lg:text-left">
              <h1 className="text-4xl font-bold">{myprojects.title}</h1>
              <p className="max-w-[600px text-white/60 mx-auto lg:mx-0]">{myprojects.description}</p>
              <ScrollArea className='h-[400px]'>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                  {myprojects.items.map((item, index)=>{
                    return <li className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1" key={index}>
                      <span className="text-emerald-500">{item.duration}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.project}</h3>
                      <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-emerald-500"></span>
                        <p className="text-white/60">{item.position}</p>
                      </div>
                    </li>
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>

          {/* education */}
          <TabsContent value='education' className='w-full'> <div className="flex flex-col gap-[30px] text-center lg:text-left">
              <h1 className="text-4xl font-bold">{education.title}</h1>
              <p className="max-w-[600px text-white/60 mx-auto lg:mx-0]">{education.description}</p>
              <ScrollArea className='h-[400px]'>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                  {education.items.map((item, index)=>{
                    return <li className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1" key={index}>
                      <span className="text-emerald-500">{item.duration}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                      <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-emerald-500"></span>
                        <p className="text-white/60">{item.institution}</p>
                      </div>
                    </li>
                  })}
                </ul>
              </ScrollArea>
            </div></TabsContent>

          {/* skills */}
          <TabsContent value='skills' className='w-full'> 
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                  {skills.skillsList.map((skill, index)=>{
                    return <li key={index}>
                     <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                          <div className="text-6xl group-hover:text-emerald-500 transition-all duration-300 ">{skill.icon}</div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize">{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                     </TooltipProvider>
                    </li>
                  })}
                </ul>
              </div>

          </TabsContent>

          {/* about */}
          <TabsContent value='about' className='w-full'>
            <div className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                {about.info.map((item, index)=>{
                  return <li className="flex items-center xl:justify-start gap-4" key={index}>
                    <span className="text-white/60">{item.feilName}</span>
                    <span className="text-xl ">{item.feilValue}</span>
                  </li>
                })}
              </ul>
            </div>
          </TabsContent>

        </div>
      </Tabs>
    </div>
  </motion.div>;
};

export default Resume;
