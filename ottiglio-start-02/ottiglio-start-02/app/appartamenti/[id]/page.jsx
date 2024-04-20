'use client';


import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchAppartamento } from '@/utils/requests';

import AppartamentoHeader from '@/components/AppartamentoHeader';
import AppartamentoTesta from '@/components/AppartamentoTesta';
import AppartamentoDettagli from "@/components/AppartamentoDettagli";
//import HeaderAppartamento, { PorpertyHeaderImage } from '@/components/HeaderAppartamento';
// import TitleAppartamento from '@/components/TitleAppartamento';
import SwiperAppartamento from '@/components/SwiperAppartamento';
// import Details from '@/components/DetailsAppartamento';
import Map from '@/components/Map';

const AppartamentoPage = () => {
  //get id from url
  const { id } = useParams();

  const[appartamento, setAppartamento] = useState(null);

  useEffect(() => {
    const fetchAppartamentoData = async () => {
      if(!id) return;
      try {
        const appartamento = await fetchAppartamento(id);
        setAppartamento(appartamento);
      } catch (error) {
        console.error('error fetching appartamento', error);
      }
    }

    // evita il loop infinito se cerchi altri id 
    if(appartamento === null) {
        fetchAppartamentoData();
    }

  }, [id, appartamento]);

  // controllo prima del return
  if (!appartamento) {
    return(
      <h1 className='text-center text-2xl mt-1 font-bold'>Appartamento not found</h1>
    );
  }

  return (
    <>
    {appartamento && (
        <>
        <AppartamentoHeader image={appartamento.images[0]}/>
        </>
    )}
    

    <div className="flex flex-col sm:flex-row gap-3 p-4 mt-6 text-center">


        <AppartamentoTesta appartamento={ appartamento }/>


        <SwiperAppartamento />

    </div>

    <div className='spacer'></div>

    <div className='spacer'></div>

    <div className="hero flex flex-col gap-4 justify-center mt-6 text-center sm:flex-row">
     <AppartamentoDettagli appartamento={ appartamento }/> 
    </div>

    <div className='spacer'></div>

    <div className="flex flex-col gap-4 justify-center mt-6 text-center sm:flex-row">
     <Map />
    </div>

    <div className='spacer'></div>
    
    </>
  );
}

export default AppartamentoPage;