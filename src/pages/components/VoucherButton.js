import React from 'react'

const VoucherButton = (props) => {
  return (
    <div className='ml-8'>
      <div className="buttons">
        <button className=" text-white hover:bg-blue hover:text-yellow hover:border-2 hover:border-yellow px-8 py-4 md:py-4 mt-8 w-full sm:w-auto rounded-xl bg-yellow">
          {props.buttonPlaceholderVoucher}
        </button>
      </div>
    </div>
  )
}

export default VoucherButton