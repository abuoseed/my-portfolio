import Link from "next/link"
import {FaGithub, FaInstagram, FaLinkedinIn, FaFacebookMessenger} from 'react-icons/fa'
const socials=[
    {icon:<FaGithub/>,path:'https://github.com/abuoseed'},
    {icon:<FaLinkedinIn/>,path:'https://www.linkedin.com/in/abdullah-ali-816946341'},
    {icon:<FaFacebookMessenger />,path:'https://m.me/bdallhabwsd.939919?hash=AbaX0DjND4Nvax0A&source=qr_link_share'},
    {icon:<FaInstagram />,path:'http://www.instagram.com/bdllhbw930?igsh=YzljYTk1ODg3Zg==‎‏'},
]


const Socials = ({containerStyles, iconStyles }) => {


  return (
    <div className={containerStyles}>
     {socials.map((item,index)=>{
        return <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
        </Link>
     })}
    </div>
  )
}

export default Socials
