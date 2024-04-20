'use client';

import { FaCalendar } from 'react-icons/fa';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale } from "react-datepicker";
import it from 'date-fns/locale/it'; // Importa la localizzazione italiana

registerLocale('it', it); // Registra la localizzazione

const DateComponent = () => {
  const [startDate, setStartDate] = useState(new Date());

  // Funzione per determinare se una data specifica deve essere disabilitata
  //const isWeekday = (date) => {
  //  const day = date.getDay();
  //  // Disabilita sabato e domenica
  //  return day !== 0 && day !== 6;
  //};

  return (
    <>
    <div className='flex items-center gap-3'>
    <FaCalendar size="1em"/>
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      dateFormat="dd/MM/yyyy" // Formato della data
      locale="it" // Imposta la localizzazione italiana
    />
    </div>
    </>
  );
};

export default DateComponent;