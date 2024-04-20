'use client';

import React, { useState } from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button} from "@nextui-org/react";

// npm i react-icons
import {FaBed, FaBath, FaTimes, FaCheck, FaMapMarker, FaRulerCombined, FaEuroSign} from 'react-icons/fa';

//const amenities = ['wifii', 'macchina caffè', 'piscina', 'sauna', 'solarium', 'brace']

const readMore = {
  WebkitLineClamp: 3,
  WebkitBoxOriented: 'vertical',
  overflow: 'hidden',
  display: '-webkit-box',
}

export default function AppartamentoDettagli({ appartamento}) {

  const [isOpen, setIsOpen] = useState(false);

  return (

    <Card className="sm:w-[650px]">
      <CardHeader className="flex gap-3 justify-center">
        
        <div className="flex flex-col">
          <h1 className="text-2xl">Dettagli</h1>
          <p className="text-small text-default-500">More Text</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
      <div className="">

            <div className='grid grid-cols-2 gap-4 justify-center mt-6 text-center sm:flex-row'>
            <p>
              <FaBed className='inline-block mr-2' />{appartamento.beds} {' '}
              <span className="hidden sm:inline"> Beds</span>
            </p>

            <p>
            <FaBath className='inline-block mr-2' /> {appartamento.baths} {' '} 
              <span className="hidden sm:inline"> Baths</span>
            </p>

            <p>
              <i className="fa-solid fa-ruler-combined"></i>
              <FaRulerCombined className='inline-block mr-2' /> 
              {appartamento.square_feet} {' '}
              <span className="hidden sm:inline">sqft</span>
            </p>

            <p>
              <i className="fa-solid fa-ruler-combined"></i>
              <FaEuroSign className='inline-block mr-2' /> 
              A partire da: {appartamento.prezzo} {' '}
              <span className="hidden sm:inline">euro / notte</span>
            </p>
            </div>

        </div>
      </CardBody>

      <h3 className="text-lg font-bold mb-4 text-center">Amenities</h3>
      <CardBody>
      
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none">
        {appartamento.amenities.slice(0, isOpen ? appartamento.amenities.length : 3).map((amenity, index) => (
        <li key={index}>
          <FaCheck className='text-green-600 mr-2 inline-block'/>
          {amenity}
        </li>
        ))}
        </ul>
        <Button size="sm" variant="light" className="w-[200px] mt-5" onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'leggi di meno' : 'leggi di più'}</Button>
          
        
      </CardBody>

      <Divider/>
      <CardFooter className="items-center justify-center">
        <Button className="w-[200px]"><Link href="/contatti">Richiedi informazioni</Link></Button>
      </CardFooter>
    </Card>
    
  );
}