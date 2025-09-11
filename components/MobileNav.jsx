'use client'
import {Sheet, SheetContent, SheetTrigger, sheetTrigger} from '@/components/ui/sheet'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { CiCircleList } from "react-icons/ci";

const link=[
  { name: "home", path: "/", id: 0 },
  { name: "services", path: "/pages/services", id: 1 },
  { name: "resume", path: "/pages/resume", id: 2 },
  { name: "work", path: "/pages/work", id: 3 },
  { name: "contact", path: "/pages/contact", id: 4 },
]
const MobileNav = () => {
    const pathanme=usePathname()
  return (
   <Sheet>
    <SheetTrigger className='flex justify-center items-center'>
        <CiCircleList className='text-[32px] text-emerald-500'/>
    </SheetTrigger>
    <SheetContent className='flex flex-col'>
      <div className="mt-32 mb-20 text-center text-2x1">
        <Link href='/'>
        <h1 className='text-4x1 font-semibold'>
          Abdullah<span className="text-emerald-500">.</span>
        </h1>
        </Link>
      </div>
        <nav className='flex flex-col justify-center items-center gap-4'>
          {link.map(({name, path, id})=>{
            return(
              <Link 
              href={path}
              key={id}
              className={`${path === pathanme &&'text-emerald-500 border-b-2 border-b-emerald-500'}text-xl capitalize hover:text-emerald-500 transition-all`}

              >{name}</Link>
            )
          })}
        </nav>
    </SheetContent>
   </Sheet>
  )
}

export default MobileNav
