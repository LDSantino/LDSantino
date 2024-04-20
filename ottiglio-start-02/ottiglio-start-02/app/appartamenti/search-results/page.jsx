'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import CardAppartamento from "@/components/CardAppartamento";
import SearchBar from "@/components/SearchBar";
import Loader from '@/components/Spinner';

import React from 'react'

const SearchResultsPage = () => {

  const searchParams = useSearchParams();

  const [appartamenti, setAppartamenti] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = searchParams.get('location');

  // imposto la request
  useEffect(() => {
    const fetchSearchResults = async () => {
        try {
            const res = await fetch(`/api/appartamenti/search?location=${location}`);

            // check dello status
            if (res.status === 200)  {
                const data = await res.json();
                setAppartamenti(data);
            } else {
                // setto setAppartamenti come un array vuoto
                setAppartamenti([]);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    fetchSearchResults();
  }, [location]);


  return (
    <>
    <section className="bg-blue-700 py-4">
        <div className="max-w-7xl mx-auto px-4 flex-col items-start sm:px-6 lg:px-8">
            <SearchBar />
        </div>
     </section>

     { loading ? (<Loader loading={loading} />) : (
        <section className='px-4 py-6'>
            <div className='container-xl lg:container m-auto'>
                <Link href={"/appartamenti"} className="flex items-center text-blue-500 hover:underline mb-3">
                    <FaArrowAltCircleLeft className='mr-2 mb-1' />
                </Link>
                <h2 className="text-2xl font-bold text-blue-500 mb-6 text-center">
                    Cerca risultati
                </h2>
                {appartamenti.length === 0 ? (
                    <p>Nessun appartamento trovato</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        { appartamenti.map((appartamento) => (
                            <CardAppartamento key={appartamento._id} appartamento={appartamento} />
                        ))}
                    </div>
                )}
            </div>
        </section>
     )}
    </>
  );
};

export default SearchResultsPage