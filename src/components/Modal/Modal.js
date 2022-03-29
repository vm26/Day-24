import React from 'react'
const Modal=(props)=>{
    if(!props.open) {
        return null;
      }
    return (
        <div className="fixed top-0 left-0 z-10 center min-w-full min-h-full bg-slate-600/50 flex justify-center items-center">
      <div className="bg-orange-100 rounded-md w-6/12 p-5">
        {/* Modal Header */}
        <div className="p-3  border-cyan-800">
          <h1 className="text-xl text-red-500 font-bold text-center">{props.title}</h1>
        </div>
        
     
        <div className="p-2">
          {
            props.children
          }
        </div>
      
      </div>
    </div>
    )
} 
export default Modal;