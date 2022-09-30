import React from 'react'

const Content = ({ quotes }) => {
  console.log(quotes)
  return (
    <div>
      <>
        
        <q>{content}</q>
        {/* <p>{name}</p> */}
         <button className='btn' onClick={clickHandle}> Regenerate</button>
      </>
    </div>
  )
}

export default Content
