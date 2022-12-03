import React from 'react'
import { FaTimes } from "react-icons/fa"

const Login = props => {

  return (
        <div className="fixed bg-black bg-opacity-30 w-full h-screen top-0 left-0 z-10">
            <div className="relative w-1/4 m-auto h-auto mt-28 bg-white rounded-2xl p-5 overflow-auto">
                <FaTimes size={20} className="cursor-pointer fixed right-[580px] top-[122px]" onClick={props.handleClose} />
                {props.content}
            </div>
        </div>
  )
}

export default Login