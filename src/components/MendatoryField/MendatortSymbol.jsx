import React from 'react'

const MendatortSymbol = ({
  classname
}) => {
  return (
    <>
    <span className={classname} style={{ 
        position: 'absolute',
        width: '16px' ,
        height: '16px' ,
        color: 'red', 
        lineHeight:'16px' ,
       // opacity:'0.5' ,
        fontSize:'16px'
    }}>*</span>
    </>
  )
}

export default MendatortSymbol