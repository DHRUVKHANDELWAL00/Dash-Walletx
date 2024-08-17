import React from 'react'

const Mnemonic = (props) => {
  const {mnemonic,setMnemonic,handleClick}=props;
  return (
    <div className="flex flex-col justify-between items-center pt-16 pb-16">
        <button onClick={handleClick} className="btn btn-outline">Generate Mnemonic</button>
        {
          mnemonic.length>0 ? 
                    <>
                    <h1 className="pt-8">{mnemonic}</h1>
                    </>
                    :
                    <>
                    <h1 className="pt-8">No mnemonic generated yet</h1>
                    </>
        }
      </div>
  )
}

export default Mnemonic