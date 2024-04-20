import React from 'react';

import {Button, Input, Textarea, Checkbox} from "@nextui-org/react";

const FormContatti = () => {
  return (
    <div className="flex w-full flex-col gap-4">
      <Input type="email" label="Email" placeholder="Enter your email" className='mt-3' isRequired/>
      <Input type="text" label="Nome" placeholder="Enter your name" className='mt-3' isRequired/>
      <Input type="text" label="Cellulare" placeholder="Enter your phone" className='mt-3'/>
      <Textarea
      label="Messaggio"
      placeholder="Enter your message"
      className="mt-3"
      isRequired
    />
    <Checkbox isRequired>Ho preso visione della Privacy Policy</Checkbox>
    <Button>Invia</Button>
    </div>
  )
}

export default FormContatti