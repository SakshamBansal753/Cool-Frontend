import React, { useState,useEffect } from 'react';
import WeatherIcon from './Icon.jsx';
import WeatherBox from './WeatherBox.jsx';


  

const WeatherCard = ({ data,forecast }) => {
    
   
    const [Day, setDay] = useState([])
    const get_day=()=>{
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const today = new Date();
        const dayName = days[today.getDay()];
        setDay(days.slice(0,today.getDay()));
        
    }
      useEffect(() => {
    get_day();
  }, []);
     
  return (
    <div className="relative inset-5 top-[350px] left-[150px] text-white flex gap-80 ">
        <div>
      <section className="flex items-center gap-6 mb-4 ml-10">
        <span className="text-5xl font-semibold">
          {data.main.temp}
          <sup>°C</sup>
        </span>
        <WeatherIcon cod={data.cod} cond={data.cond}/>
      </section>

      <h1 className="text-5xl font-bold ml-10">{data.name}</h1>
      <div className="text-2xl mt-2 ml-10  font-medium ">{data.weather[0].main}
        <span className='ml-3' >L:{data.main.temp_min}<sup>°C</sup></span>
        <span className='ml-3' >H:{data.main.temp_min} <sup>°C</sup></span>
        </div>
        </div>
        <div className='relative right-0 '>
            <WeatherBox foday={forecast}/>
        </div>
    </div>
  );
};

export default WeatherCard;
