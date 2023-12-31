import { useCallback, useEffect, useState } from "react";

function App() {

    const [pass, setPass] = useState()
    const [length, setLength] = useState(8)
    const [symbol, setSymbol] = useState(false)
    const [number, setNumber] = useState(false)
    
    

    const genPass = useCallback(()=> {
        let pass = ''
        let words = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        if (symbol) words += '~!@#$%^&*()-_{}[]:;"<>?/'
        if (number) words += '0123456789'
        
        for(let i =1 ;i <= length; i++) {
            let random =  Math.floor(Math.random() * words.length +1)
            pass += words.charAt(random);
        }
        setPass(pass);
    })

    const copy2Clip = ()=> {
        window.navigator.clipboard.writeText(pass)

    }
    
    useEffect(()=>genPass(), [length, symbol, number])

    return (

    <div className="bg-slate-900 h-screen text-slate-100 text-center flex justify-center  overflow-hidden  place-items-center flex-col gap-4"  >
        <h1 className="font-sans font-light  text-4xl md:text-6xl mb-4 ">Password Generator</h1>

        <div className="flex gap-4 flex-wrap justify-center place-items-center">
        <h3 className="text-cyan-300 text-sm">{pass}</h3>
        <button className="bg-slate-500 py-1 px-4  rounded-md  border-transparent  border-[1px]
        hover:bg-gray-800  hover:border-white
        " onClick={copy2Clip}>Copy </button>
        </div>
        <p className="text-xs">Password length : {length}</p>

        <label htmlFor="">
        Length 
        <input  className="mx-2" onChange={(e)=>setLength(e.target.value)} type="range" min={8} max={35} defaultValue={8} 
         />
         </label>
        <div className="mt-4 flex justify-evenly flex-wrap">

         <label >
         <input type="checkbox" className="mx-2" onChange={()=> setSymbol((symbol => !symbol))}/>
            Special Symbols
         </label>
         <label >
         <input type="checkbox" className="mx-2" onChange={()=> setNumber((number => !number))} />
            Numbers
         </label>
         </div>
    </div>

    );
}

export default App