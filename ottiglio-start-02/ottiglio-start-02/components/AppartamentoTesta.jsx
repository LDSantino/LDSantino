import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button} from "@nextui-org/react";
//import Date from '@/components/DatePickComp';

import Modale from '@/components/ModalePreventivo';


export default function TitleAppartamento({ appartamento }) {
  return (
      <>
        <div className="w-full z-10 border-1 border-black sm:w-1/2">
        <div className="flex flex-col p-16">
          <h1 className="text-2xl">{appartamento.name}</h1>
          <p className="text-small mb-3 text-default-500">{appartamento.type}</p>
        

        <p>{appartamento.description}</p>
        <p>Make beautiful websites regardless of your design experience.</p>
        <div className="spacer"></div>
        <div className="flex flex-col sm:flex-cols-2 items-center justify-between">
       {/*<Date />
        <Date />*/}
        </div>

        <div className="spacer"></div>

        <div className="text-center">
         <Modale />
         </div>

        </div>
        </div>
      </>
  );
}