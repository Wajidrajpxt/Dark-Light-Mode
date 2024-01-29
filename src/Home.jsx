import React, { useEffect, useState } from "react";

export default function Home() {
  
    const [mode,setmode] = useState(false)

     const darkmode = () =>{
        setmode(!mode);

     }

     useEffect(()=>{
        if(mode == true){
            document.body.classList.add("dark")
        }
        else{
            document.body.classList.remove("dark")

        }
     })
  
  
  
    return (
    <>
      <div className="h-screen w-[100%]">
        <h1 className="w-[100%] h-[20vh]  p-5 text-[50px] font-mono text-center ">
          DARK LIGHT MODE
        </h1>

        <div className="w-[100%] flex justify-center items-center">
          <button 
          onClick={darkmode}  className="h-[50px] w-[200px] text-[white]  bg-[black]">
            { mode ? "light":"dark"}
          </button>
        </div>

        <h1 className=" font-normal pt-10 pl-6 text-[22px] font-mono">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
          deleniti culpa sint deserunt, voluptatem laborum explicabo obcaecati
          voluptatibus veniam, reiciendis ab delectus asperiores ipsa, placeat
          at. Asperiores qui autem ullam!
        </h1>

        <div className="h-[40vh]     w-[100%] flex justify-center pt-10">
          <img 
        
            src= "https://cdn.dribbble.com/users/2442115/screenshots/8699490/media/48bbda278683c7879bebd57f0e2f9271.gif"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
