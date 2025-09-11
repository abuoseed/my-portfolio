import {motion ,animate} from 'framer-motion'

const stairAnimetion={
    initial:{
        top:'0%'
    },
    animate:{
        top:"100%"
    },
    exit:{
        top:['100%',"0%"]
    }
}
const reverseIndex=(index)=>{
    const totelsteps=6
    return totelsteps - index - 1 
    
}
const Stair = () => {
  return (
    <>
    {
        [...Array(6)].map((_,index)=>
            <motion.div 
            key={index}
            variants={stairAnimetion} 
            initial="initial"
            animate="animate" 
            exit='exit' 
            transition={{duration:0.3, ease:'easeInOut', delay:reverseIndex(index) *0.1}}
            className='h-full w-full bg-white relative'
            />
)
    }
       
    </>
  )
}

export default Stair
