'use client';


import { useState } from "react";
import { useRouter } from 'next/navigation';

import {Input, Button} from "@nextui-org/react";

import { FaSearch } from "react-icons/fa"; 

export default function Searchbar() {

  const [location, setLocation] = useState('');

  // router per reindirizzamento ricerca
  const router = useRouter();

  const handlerSubmit = (e) => {
    e.preventDefault();

    if(location === '') {
      router.push('/appartamenti');
    } else {
      const query = `?location=${location}`;

      router.push(`/appartamenti/search-results${query}`);
    }
  };

  return (
    <>
    <form 
    className="mt-3 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center"
    onSubmit={handlerSubmit}>
     <div className="sm:w-[400px]">
      {/*<Input
        label="Search"
        isClearable
        radius="lg"
        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-xl",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focused=true]:bg-default-200/50",
            "dark:group-data-[focused=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
        placeholder="Type to search..."
        startContent={
          <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        }
      />
      <Button 
      type="submit"
      className="md:ml-4 mt-6 md:mt-0 w-full md:w-auto px-6 py-6 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500">
        Cerca
      </Button>*/}

      <label htmlFor="location" className="sr-only">Location</label>
      <Input 
      type="text"
      id="location"
      placeholder="Cerca una parola chiave"
      className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
      value={location}
      onChange={(e) => setLocation(e.target.value)}
      />
      </div>
      <Button
        type="submit"
        size="sm"
        className="md:ml-1 mt-4 md:mt-0 w-[50px] rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
      >
        <FaSearch />
      </Button>
      
    </form>
</>
  );
}
