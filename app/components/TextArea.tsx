import Textarea from '@mui/joy/Textarea';
import React from 'react'

const TextArea = () => {
  return (
    <div className='px-4 text-[14px]'>
      <div className="p-2 text-gray-600 text-sm">Custom Input: </div>
       <Textarea name="Solid" variant="soft" minRows={10} size='sm' />
    </div>
  )
}

export default TextArea
