import { useState } from "react"


function App() {
  const [color, setcolor]=useState("olive");
  
  return (
    
    <div className=" w=full h-screen" style={{backgroundColor:color}}>
     
     <h1 className="text-white text-6xl text-center pt-5">Background Changer</h1>


     <div className="pt-145">
     
      <div className="text-black bg-white flex gap-6 justify-center ml-35 mr-35 rounded-2xl h-13 py-2 " >

        <button onClick={()=> setcolor("red") } 
        className="px-4 py-1 rounded-full text-white" style={{backgroundColor:"red"}}>Red</button>

         <button onClick={()=> setcolor("green")} 
        className="px-4 py-1 rounded-full text-white" style={{backgroundColor:"green"}}>Green</button>

        <button onClick={()=> setcolor("blue")}
        className="px-4 py-1 rounded-full text-white" style={{backgroundColor:"blue"}}>Blue</button>

        <button onClick={()=> setcolor("yellow")} 
        className="px-4 py-1 rounded-full text-white" style={{backgroundColor:"yellow"}}>Yellow</button>

        

         <button onClick={()=> setcolor("black")} 
        className="px-4 py-1 rounded-full text-white" style={{backgroundColor:"black"}}>black</button>

         <button onClick={()=> setcolor("DeepPink")} 
        className="px-4 py-1 rounded-full text-white" style={{backgroundColor:"DeepPink"}}>Pink</button>

         <button onClick={()=> setcolor("Aqua")} 
        className="px-4 py-1 rounded-full text-white" style={{backgroundColor:"Aqua"}}>Aqua</button>


          <button onClick={()=> setcolor("Tan")} 
        className="px-4 py-1 rounded-full text-white" style={{backgroundColor:"Tan"}}>Tan</button>
   
         <button onClick={()=> setcolor("SpringGreen")} 
        className="px-4 py-1 rounded-full text-white" style={{backgroundColor:"SpringGreen"}}>SpringGreen</button>

          <button onClick={()=> setcolor("Violet")} 
        className="px-4 py-1 rounded-full text-white" style={{backgroundColor:"Violet"}}>Violet</button>


          <button onClick={()=> setcolor("Turquoise")} 
        className="px-4 py-1 rounded-full text-white" style={{backgroundColor:"Turquoise"}}>Turquoise</button>

          <button onClick={()=> setcolor("Maroon")} 
        className="px-4 py-1 rounded-full text-white" style={{backgroundColor:"Maroon"}}>Maroon</button>
  

    

        </div> 
      </div>



    <p className="text-2xl text-center text-cyan-50 mt-8">Made with &hearts; by Gangotri</p>
    </div>
      
    
  );
};

export default App
