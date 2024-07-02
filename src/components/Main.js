import React from 'react'
import { useState } from 'react'
function Main() {
  const [game,setGame]=useState([{val:0,key:1},{val:0,key:2},{val:0,key:3},{val:0,key:4},{val:0,key:5},{val:0,key:6},{val:0,key:7},{val:0,key:8},{val:0,key:9}])
  const [countEvent,setCountEvent]=useState(0);
  const [done,setDone]=useState(false)
  const handleGameClick = (e)=>{
    // console.log(e)
    setCountEvent((prev)=>prev+1)
    console.log(countEvent)
    console.log(e.target)
  }
  return (
    <div className=' bg-black text-white min-h-full'>
      <div className=' text-center w-1/2 mx-auto py-96'>
        <h2 className=' text-xl tracking-wider'>TIC-TAC-TOE</h2>
        <div className=' mx-auto w-1/4 grid grid-cols-3 grid-rows-3'>

          {game.map((e1,i1)=>{
              return (
                <div className=' row-span-1'>
                  {/* <h2 onClick={()=>{
                    setGame(game.forEach(prev=>{
                      // if(prev.key==e1.key){
                      //   prev.val=countEvent;
                      // }
                    }))
                    console.log(e1.key)}}>{e1.val}</h2> */}
                <input type='checkbox' className=' h-10 rounded-xl checked:bg-black scale-150 checked:scale-110 checked:divide-slate-950' />
                {/* <button value={e1} onClick={()=>handleGameClick()} className=''> click</button> */}
                  </div>
              )
              })}
        </div>
      </div>
    </div>
  )
}

export default Main