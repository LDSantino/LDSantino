import Image from 'next/image';

import { MdDirectionsBike } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

const Esperienze = () => {
  return (
    <>
    <div className='heroEsperienze'>

      <div className='relative container flex flex-col max-w-6xl mx-auto my-24 px-6 flex-row px-0'>
        <Image 
          src="/images/a2.jpg"
          alt=""
          className="object-cover w-full h-[400px]"
          width={0}
          height={0}
          sizes="100vw"
          priority={true}/>        
          <div className='top-48 pr-0 bg-white absolute right-0 py-8 pl-8 pr-8'>
            {/*<h2 className='max-w-lg mt-10 mb-6 text-4xl text-center md:text-5xl md:mt-0 md:text-left'>Testo di prova</h2>*/}
            <h1 className='text-4xl'>Scopri le nostre esperienze</h1>
            <p>Lorem ipsum...</p>
          </div>
      </div>

    </div>

    <div className="container-xl lg:container m-auto mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 items-center">

        <div>
        <div className='flex items-center'>
          <MdDirectionsBike className="h-4 w-4 fill-black text-white ml-2 mr-3" />
          <h1 className='text-2xl'>Bike</h1>
        </div>
        <p>Ti diamo la possibilità di affittare le biciclette</p>
        </div>

        <div>
          <Image src="/images/bike.jpg" width={0} height={0} sizes="100vw" alt="" priority={true} className='immaginiEsperienze'/>
        </div>

      </div>
    </div>

    <div className='spacer'></div>

    <div className="container-xl lg:container m-auto mt-6">
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 items-center">

       <div className="order-last sm:order-first">
         <Image src="/images/tartufo.jpg" width={0} height={0} sizes="100vw" alt="" priority={true} className='immaginiEsperienze'/>
       </div>
   
       <div className="order-first sm:order-last">
         <div className='flex items-center justify-end'>
           <CiSearch className="h-4 w-4 fill-black text-white ml-2 mr-3" />
           <h1 className='text-2xl'>Tartufo</h1>
         </div>
         <p className='text-end'>Alla ricerca dei tartufi</p>
       </div>

     </div>
    </div>


    </>
  )
}

export default Esperienze