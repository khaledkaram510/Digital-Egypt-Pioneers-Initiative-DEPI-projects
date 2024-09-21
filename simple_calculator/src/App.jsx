// import { useEffect } from 'react'
// import { useState } from 'react'
// function App() {
//   const [num,setNum] = useState("")
//   const [done,setDone] = useState(false)
//   useEffect(() => {
//     if(num === "0"){
//       setNum("")
//     }
//   }, [num])
//   const handleClick = (e) => {
//     console.log(done)
//     if(done){
//       setNum("");
//       setDone(false)
//     }
//     if(e.target.innerText === "Del"){
//       setNum(num.slice(0,-1))
//     }else if(e.target.innerText === "MC"){
//       setNum("")
//     }else if(e.target.innerText === "="){
//       // setNum(+num.slice(0,num.indexOf("+"))+num.slice(num.indexOf("+")))
//       if(num.indexOf("+") !== -1){
//         if(num.indexOf(".") === -1){
//           setNum(parseInt(num.slice(0,num.indexOf("+"))) + parseInt(num.slice(num.indexOf("+")+1)))
//         }else{
//           setNum(parseFloat(num.slice(0,num.indexOf("+"))) + parseFloat(num.slice(num.indexOf("+")+1)))
//         }
//       }else if(num.indexOf("-") !== -1){
//         if(num.indexOf(".") === -1){
//           setNum(parseInt(num.slice(0,num.indexOf("-"))) - parseInt(num.slice(num.indexOf("-")+1)))
//         }else{
//           setNum(parseFloat(num.slice(0,num.indexOf("-"))) - parseFloat(num.slice(num.indexOf("-")+1)))
//         }
//       }else if(num.indexOf(String.fromCharCode(215)) !== -1){
//         if(num.indexOf(".") === -1){
//           setNum(parseInt(num.slice(0,num.indexOf(String.fromCharCode(215)))) * parseInt(num.slice(num.indexOf(String.fromCharCode(215))+1)))
//         }else{
//           setNum(parseFloat(num.slice(0,num.indexOf(String.fromCharCode(215)))) * parseFloat(num.slice(num.indexOf(String.fromCharCode(215))+1)))
//         }
//       }else{
//         setNum(parseFloat(num.slice(0,num.indexOf(String.fromCharCode(247)))) / parseFloat(num.slice(num.indexOf(String.fromCharCode(247))+1)))
//       }
//       setDone(true)
//     }else if(e.target.innerText === String.fromCharCode(0x2022)){
//       setNum(num + ".")
//     }else{
//       setNum(num + e.target.innerText)
//     }
//   }
//   return (
//     <>
//       <div className="flex h-screen flex-col justify-center items-center">
//         <div className="w-60 h-fit bg-whit ">
//           <div className="bg-[#7098a7] w-full p-3 rounded-tl-md rounded-t-md ">
//             <div className="bg-[#8cafad] p-2 text-end h-10 rounded-md">{num}</div>
//           </div>
//           <div className="grid grid-cols-4 grid-rows-5 gap-3 bg-[#d1e3e0] p-3 rounded-es-md rounded-br-md">
//             <button onClick={handleClick} className="text-white bg-[#407385] rounded-md p-2 hover:brightness-90 duration-500">MC</button>
//             <button onClick={handleClick} className="text-white bg-[#407385] rounded-md p-2 hover:brightness-90 duration-500">Del</button>
//             <button onClick={handleClick} className="text-white bg-[#407385] rounded-md p-2 hover:brightness-90 duration-500">&divide;</button>
//             <button onClick={handleClick} className="text-white bg-[#407385] rounded-md p-2 hover:brightness-90 duration-500">&#215;</button>
//             <button onClick={handleClick} className="text-white bg-[#6e9ca6] rounded-md p-2 hover:brightness-90 duration-500">7</button>
//             <button onClick={handleClick} className="text-white bg-[#6e9ca6] rounded-md p-2 hover:brightness-90 duration-500">8</button>
//             <button onClick={handleClick} className="text-white bg-[#6e9ca6] rounded-md p-2 hover:brightness-90 duration-500">9</button>
//             <button onClick={handleClick} className="text-white bg-[#407385] rounded-md p-2 hover:brightness-90 duration-500">-</button>
//             <button onClick={handleClick} className="text-white bg-[#6e9ca6] rounded-md p-2 hover:brightness-90 duration-500">4</button>
//             <button onClick={handleClick} className="text-white bg-[#6e9ca6] rounded-md p-2 hover:brightness-90 duration-500">5</button>
//             <button onClick={handleClick} className="text-white bg-[#6e9ca6] rounded-md p-2 hover:brightness-90 duration-500">6</button>
//             <button onClick={handleClick} className="text-white bg-[#407385] rounded-md p-2 hover:brightness-90 duration-500">+</button>
//             <button onClick={handleClick} className="text-white bg-[#6e9ca6] rounded-md p-2 hover:brightness-90 duration-500">1</button>
//             <button onClick={handleClick} className="text-white bg-[#6e9ca6] rounded-md p-2 hover:brightness-90 duration-500">2</button>
//             <button onClick={handleClick} className="text-white bg-[#6e9ca6] rounded-md p-2 hover:brightness-90 duration-500">3</button>
//             <button onClick={handleClick} className="text-white bg-[#ff8231] rounded-md p-2 row-span-2 hover:brightness-90 duration-500">=</button>
//             <button onClick={handleClick} className="text-white bg-[#6e9ca6] rounded-md p-2 col-span-2 hover:brightness-90 duration-500">0</button>
//             <button onClick={handleClick} className="text-white bg-[#6e9ca6] rounded-md p-2 hover:brightness-90 duration-500">&#x2022;</button>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default App

// import { useEffect, useState } from 'react';

// function App() {
//   const [num, setNum] = useState("");
//   const [done, setDone] = useState(false);

//   // Clear input when '0' is displayed
//   useEffect(() => {
//     if (num === "0") {
//       setNum("");
//     }
//   }, [num]);

//   const handleClick = (e) => {
//     const value = e.target.innerText;

//     if (value === "Del") {
//       setNum(num.slice(0, -1));
//     } else if (value === "MC") {
//       setNum("");
//     } else if (value === "=") {
//       try {
//         // Perform the calculation and replace symbols with JS operators
//         setNum(eval(num.replace("×", "*").replace("÷", "/")).toString());
//         setDone(true); // Mark calculation as done
//       } catch (err) {
//         setNum("Error");
//         setDone(true); // Also mark as done in case of an error
//       }
//     } else if (value === "•") {
//       // Ensure only one decimal point is added
//       if(done && !num.includes(".")){
//         setNum(".");
//         setDone(false);
//       }else if (!num.includes(".")) {
//         setNum(num + ".");
//       }
//     } else {
//       if(done && /\d/.test(value)){
//         setNum(value);
//         setDone(false);
//       }else{
//         setNum(num + value);
//         setDone(false);
//       }
//       // Append clicked button to the current number
      
//     }
//   };

//   return (
//     <>
//       <div className="flex h-screen flex-col justify-center items-center">
//         <div className="w-60 h-fit bg-white">
//           <div className="bg-[#7098a7] w-full p-3 rounded-tl-md rounded-t-md">
//             <div className="bg-[#8cafad] p-2 text-end h-10 rounded-md">{num}</div>
//           </div>
//           <div className="grid grid-cols-4 grid-rows-5 gap-3 bg-[#d1e3e0] p-3 rounded-es-md rounded-br-md">
//             <button onClick={handleClick} className="text-white bg-[#407385] rounded-md p-2 hover:brightness-90 duration-500">MC</button>
//             <button onClick={handleClick} className="text-white bg-[#407385] rounded-md p-2 hover:brightness-90 duration-500">Del</button>
//             <button onClick={handleClick} className="text-white bg-[#407385] rounded-md p-2 hover:brightness-90 duration-500">÷</button>
//             <button onClick={handleClick} className="text-white bg-[#407385] rounded-md p-2 hover:brightness-90 duration-500">×</button>
//             <button onClick={handleClick} className="text-white bg-[#6e9ca6] rounded-md p-2 hover:brightness-90 duration-500">7</button>
//             <button onClick={handleClick} className="text-white bg-[#6e9ca6] rounded-md p-2 hover:brightness-90 duration-500">8</button>
//             <button onClick={handleClick} className="text-white bg-[#6e9ca6] rounded-md p-2 hover:brightness-90 duration-500">9</button>
//             <button onClick={handleClick} className="text-white bg-[#407385] rounded-md p-2 hover:brightness-90 duration-500">-</button>
//             <button onClick={handleClick} className="text-white bg-[#6e9ca6] rounded-md p-2 hover:brightness-90 duration-500">4</button>
//             <button onClick={handleClick} className="text-white bg-[#6e9ca6] rounded-md p-2 hover:brightness-90 duration-500">5</button>
//             <button onClick={handleClick} className="text-white bg-[#6e9ca6] rounded-md p-2 hover:brightness-90 duration-500">6</button>
//             <button onClick={handleClick} className="text-white bg-[#407385] rounded-md p-2 hover:brightness-90 duration-500">+</button>
//             <button onClick={handleClick} className="text-white bg-[#6e9ca6] rounded-md p-2 hover:brightness-90 duration-500">1</button>
//             <button onClick={handleClick} className="text-white bg-[#6e9ca6] rounded-md p-2 hover:brightness-90 duration-500">2</button>
//             <button onClick={handleClick} className="text-white bg-[#6e9ca6] rounded-md p-2 hover:brightness-90 duration-500">3</button>
//             <button onClick={handleClick} className="text-white bg-[#ff8231] rounded-md p-2 row-span-2 hover:brightness-90 duration-500">=</button>
//             <button onClick={handleClick} className="text-white bg-[#6e9ca6] rounded-md p-2 col-span-2 hover:brightness-90 duration-500">0</button>
//             <button onClick={handleClick} className="text-white bg-[#6e9ca6] rounded-md p-2 hover:brightness-90 duration-500">•</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

import { useEffect, useState } from 'react';

function App() {
  const [num, setNum] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (num === "0") {
      setNum("");
    }
    const handleKeyDown = (e) => {
      const key = e.key;

      // Handle numbers and operators
      if (/\d/.test(key) || ["+", "-", "*", "/", "."].includes(key)) {
        handleClick({ target: { innerText: key } });
      }
      // Handle Enter key for "="
      if (key === "Enter") {
        handleClick({ target: { innerText: "=" } });
      }
      // Handle Backspace key for delete
      if (key === "Backspace") {
        handleClick({ target: { innerText: "Del" } });
      }
      // Handle "Escape" key for clear
      if (key === "Escape") {
        handleClick({ target: { innerText: "MC" } });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [num]);

  const handleClick = (e) => {
    const value = e.target.innerText;

    if (value === "Del") {
      setNum(num.slice(0, -1));
    } else if (value === "MC") {
      setNum("");
    } else if (value === "=") {
      try {
        setNum(eval(num.replace("×", "*").replace("÷", "/")).toString());
        setDone(true);
      } catch (err) {
        setNum("Error");
        setDone(true);
      }
    } else if (value === "•") {
      if (!num.includes(".")) {
        setNum(num + ".");
      }
    } else {
      if (done && /\d/.test(value)) {
        setNum(value);
        setDone(false);
      } else {
        setNum(num + value);
        setDone(false);
      }
    }
  };

  return (
    <>
      <div className="flex h-screen flex-col justify-center items-center">
        <div className="w-60 h-fit bg-white">
          <div className="bg-[#7098a7] w-full p-3 rounded-tl-md rounded-t-md">
            <div className="bg-[#8cafad] p-2 text-end h-10 rounded-md">{num}</div>
          </div>
          <div className="grid grid-cols-4 grid-rows-5 gap-3 bg-[#d1e3e0] p-3 rounded-es-md rounded-br-md">
            <button onClick={handleClick} className="text-white bg-[#407385] rounded-md p-2 hover:brightness-90 duration-500">MC</button>
            <button onClick={handleClick} className="text-white bg-[#407385] rounded-md p-2 hover:brightness-90 duration-500">Del</button>
            <button onClick={handleClick} className="text-white bg-[#407385] rounded-md p-2 hover:brightness-90 duration-500">÷</button>
            <button onClick={handleClick} className="text-white bg-[#407385] rounded-md p-2 hover:brightness-90 duration-500">×</button>
            <button onClick={handleClick} className="text-white bg-[#6e9ca6] rounded-md p-2 hover:brightness-90 duration-500">7</button>
            <button onClick={handleClick} className="text-white bg-[#6e9ca6] rounded-md p-2 hover:brightness-90 duration-500">8</button>
            <button onClick={handleClick} className="text-white bg-[#6e9ca6] rounded-md p-2 hover:brightness-90 duration-500">9</button>
            <button onClick={handleClick} className="text-white bg-[#407385] rounded-md p-2 hover:brightness-90 duration-500">-</button>
            <button onClick={handleClick} className="text-white bg-[#6e9ca6] rounded-md p-2 hover:brightness-90 duration-500">4</button>
            <button onClick={handleClick} className="text-white bg-[#6e9ca6] rounded-md p-2 hover:brightness-90 duration-500">5</button>
            <button onClick={handleClick} className="text-white bg-[#6e9ca6] rounded-md p-2 hover:brightness-90 duration-500">6</button>
            <button onClick={handleClick} className="text-white bg-[#407385] rounded-md p-2 hover:brightness-90 duration-500">+</button>
            <button onClick={handleClick} className="text-white bg-[#6e9ca6] rounded-md p-2 hover:brightness-90 duration-500">1</button>
            <button onClick={handleClick} className="text-white bg-[#6e9ca6] rounded-md p-2 hover:brightness-90 duration-500">2</button>
            <button onClick={handleClick} className="text-white bg-[#6e9ca6] rounded-md p-2 hover:brightness-90 duration-500">3</button>
            <button onClick={handleClick} className="text-white bg-[#ff8231] rounded-md p-2 row-span-2 hover:brightness-90 duration-500">=</button>
            <button onClick={handleClick} className="text-white bg-[#6e9ca6] rounded-md p-2 col-span-2 hover:brightness-90 duration-500">0</button>
            <button onClick={handleClick} className="text-white bg-[#6e9ca6] rounded-md p-2 hover:brightness-90 duration-500">•</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
