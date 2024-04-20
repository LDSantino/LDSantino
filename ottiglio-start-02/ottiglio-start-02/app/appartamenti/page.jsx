import { fetchAppartamenti } from "@/utils/requests";

import CardAppartamento from '@/components/CardAppartamento';

import PaginationControl from '@/components/PaginationControl';

import Searchbar from "@/components/SearchBar";


const Appartamenti = async () => {

  const appartamenti = await fetchAppartamenti();

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
          Le Residenze
        </h2>

        <div className="flex justify-center">
          <Searchbar />
        </div>

        <div className='spacer'></div>

        {appartamenti.lengh === 0 ? (
          <p>Non ci sono appartamenti disponibili</p>
        ) : (
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          { appartamenti.map((appartamento) => (
            <CardAppartamento key={appartamento._id} appartamento={appartamento}/>
          ))}
         </div>
        )}
        </div>

        <div className="flex justify-center mt-8">
         <PaginationControl />
        </div>
    </section>
  )
}

export default Appartamenti