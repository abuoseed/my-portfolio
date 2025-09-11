import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Nav from './Nav'
import MobileNav from './MobileNav'
const Header = () => {
  return (
    <header className='py-8 lg:py-12 text-white w-[90%] mx-auto'>
      <div className="container mx-auto flex justify-between items-center">
        <Link href='/'>
          <h1 className='ml-4 text-4xl font-semibold'>
            Abdullah<span className='text-emerald-500'>.</span>
          </h1>
        </Link>
        <div className="hidden lg:flex items-center gap-8">
          <Nav />
          <Link href="/pages/contact">
            <Button>Hire me</Button>
          </Link>
        </div>
        <div className="lg:hidden">
          <MobileNav />
        </div>

      </div>

    </header>
  )
}

export default Header
