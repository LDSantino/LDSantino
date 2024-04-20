import React from 'react';

import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button} from "@nextui-org/react";

import { FaInstagram, FaFacebook, FaTelegram } from 'react-icons/fa';

import FormContatti from '@/components/FormContatti';

const Contatti = () => {
  return (
    <>
     <div className='flex flex-col heroContacts items-center text-center justify-center'>

        <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
                <h1 className='text-4xl mt-2 text-center'>Contattaci</h1>
            </div>
            <div className="flex flex-col space-y-1.5">
                Per info sulle prenotazioni e sui servizi, contattaci utilizzando i canai a disposizione
            </div>
            
          </div>

          <div className="flex flex-col items-center mt-5">

        </div>


     
     </div>

     <div className='flex flex-col items-center text-center'>
     <Card className="w-full h-auto p-6 mt-8 sm:w-[650px]">
      <CardHeader>
        <h2>Compila il form</h2>
      </CardHeader>

      <FormContatti />
    </Card>
    </div>

    <div className='spacer'></div>

    <div className='flex flex-col heroContacts items-center text-center'>
     <Card className="w-full mt-8 sm:w-[650px]">
     <CardBody>
        <div className="grid w-full items-center gap-4 justify-center">
            <div className="flex flex-col space-y-1.5">
                <h1 className='text-2xl mt-2 text-center'>Seguici anche su tutti i nostri canali</h1>
            </div>
            <div className="flex flex-col space-y-1.5">
                Vieni a scoprire le nostre rubriche e tutte le nostre attività sui social
            </div>
            
          </div>

          <div className="flex flex-col items-center mt-5">

        </div>
     </CardBody>
     <Divider/>
      <CardFooter className='items-center justify-center gap-3'>
        <Button className='bottoniSocial'><FaInstagram/></Button>
        <Button className='bottoniSocial'><FaFacebook/></Button>
        <Button className='bottoniSocial'><FaTelegram/></Button>
      </CardFooter>
     </Card>

     
     </div>
    </>
  )
}

export default Contatti