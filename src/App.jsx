import { useEffect, useState } from 'react'


function App() {
   
  
  const [rotate,setRotate] = useState(0)

  useEffect(() => {
   window.addEventListener("mousemove", (e)=>{
    
    let mouseX = e.clientX;
    let mouseY = e.clientY;
   
    let deltaX = mouseX-window.innerWidth/2;
    let deltaY = mouseY-window.innerHeight/2;

  let angle = Math.atan2(deltaY,deltaX)*(180/Math.PI);
  setRotate(angle);


   })
  
    
  });
  
 

  return (
   <div className=' w-96 h-64 rounded-md bg-slate-500  flex justify-evenly gap-2 content-center items-center absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
    <div className='  flex justify-center items-center w-[9vw] h-32 rounded-full bg-slate-50 '>
    <div  className='flex justify-center items-center  w-[6vw] h-24 rounded-full  bg-black ' >
      <div style={{transform: ` translate(-50%,-50%) rotate(${rotate})`}} className='w-full h-5 line '>


          <div  className=' w-10  h-10 rounded-full  bg-white ' >
        
        </div>
        </div>
      </div>
    </div>
    <div className=' flex justify-center items-center w-[9vw] h-32 rounded-full bg-slate-50 '>

      <div  className='flex justify-center items-center  w-[6vw] h-24 rounded-full  bg-black ' >
      <div style={{transform: `rotate(${rotate})`}} className='w-full h-5 line '>


          <div  className=' w-10  h-10 rounded-full  bg-white ' >
        
        </div>
        </div>
      </div>
    </div>
    
   </div>
  )
}

export default App
