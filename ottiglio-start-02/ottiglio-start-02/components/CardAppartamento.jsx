'use client';

import React from 'react';

import Image from 'next/image';

import Link from 'next/link';

import { FaBed, FaBath, FaRulerCombined, FaMoneyBill, FaMapMarker} from 'react-icons/fa'

const CardAppartamento = ({ appartamento }) => {


  return (
    <div className="bg-white rounded-xl shadow-md relative">
            <Image
              src={`/images/${appartamento.images[0]}`}
              alt=""
              height={300}
              width={300}
              className="object-cover w-full rounded-t-xl"
            />
            <div className="p-4">
              <div className="text-left md:text-center lg:text-left mb-6">
                <div className="text-gray-600">{appartamento.type}</div>
                <h3 className="text-xl font-bold text-black">{appartamento.name}</h3>
              </div>
              <h3
                className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right"
              >
                {appartamento.prezzo} €
              </h3>

              <div className="flex justify-center gap-4 text-gray-500 mb-4">
                <p>
                  <FaBed className="inline mr-2"/> {appartamento.beds} {''}
                  <span className="md:hidden lg:inline">Letti</span>
                </p>
                <p>
                <FaBath className="inline mr-2"/>  {appartamento.baths} {''}
                  <span className="md:hidden lg:inline">Bagni</span>
                </p>
                <p>
                <FaRulerCombined className="inline mr-2"/>
                {appartamento.square_feet} <span className="md:hidden lg:inline">sqft</span>
                </p>
              </div>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="flex align-middle gap-2 mb-4 lg:mb-0">
                  <FaMapMarker className='text-orange-700 mt-1'/>
                  <span className="text-orange-700">{appartamento.location.city}, {appartamento.location.street}</span>
                </div>
                <Link
                  href={`appartamenti/${appartamento._id}`}
                  className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                  Dettagli
                </Link>
              </div>
            </div>
          </div>
  )
}

export default CardAppartamento