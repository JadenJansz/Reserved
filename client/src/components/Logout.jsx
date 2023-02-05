import React from 'react'

const Logout = props => {
  return (
    <div className="fixed bg-black bg-opacity-40 w-full h-screen top-0 left-0">
            <div className="relative w-1/3 m-auto h-auto mt-60 bg-white rounded-2xl p-5 overflow-auto">
                {props.content}
            </div>
        </div>
  )
}

export default Logout