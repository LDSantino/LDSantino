'use client';

import React, { useState } from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button} from "@nextui-org/react";

// npm i react-icons
import {FaBed, FaBath, FaTimes, FaCheck, FaMapMarker, FaRulerCombined} from 'react-icons/fa';

const amenities = ['wifii', 'macchina caffè', 'piscina', 'sauna', 'solarium', 'brace']

const readMore = {
  WebkitLineClamp: 3,
  WebkitBoxOriented: 'vertical',
  overflow: 'hidden',
  display: '-webkit-box',
}

export default function Details( ) {

  const [isOpen, setIsOpen] = useState(false);

  return (

    <Card className="sm:w-[650px]">
      <CardHeader className="flex gap-3">
        
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
              <FaBed className='inline-block mr-2' /> 3  
              <span className="hidden sm:inline"> Beds</span>
            </p>

            <p>
            <FaBath className='inline-block mr-2' /> 2  
              <span className="hidden sm:inline"> Baths</span>
            </p>

            <p>
              <i className="fa-solid fa-ruler-combined"></i>
              <FaRulerCombined className='inline-block mr-2' /> 
              1500
              <span className="hidden sm:inline">sqft</span>
            </p>

            <p>
              <i className="fa-solid fa-ruler-combined"></i>
              <FaRulerCombined className='inline-block mr-2' /> 
              1500
              <span className="hidden sm:inline">sqft</span>
            </p>
            </div>

        </div>
      </CardBody>

      <CardBody>
        <h3 className="text-lg font-bold mb-4">Amenities</h3>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none space-y-2">
        {amenities.slice(0, isOpen ? amenities.length : 3).map((amenity, index) => (
        <li key={index}>
          <FaCheck className='text-green-600 mr-2 inline-block'/>
          {amenity}
        </li>
        ))}
        </ul>
        <Button className="w-[200px] mt-5" onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'leggi di meno' : 'leggi di più'}</Button>
          
        
      </CardBody>

      <Divider/>
      <CardFooter>
        <Button className="w-[200px]"><Link href="/contatti">Richiedi informazioni</Link></Button>
      </CardFooter>
    </Card>
    
  );
}