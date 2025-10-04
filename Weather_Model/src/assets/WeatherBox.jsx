import React, { useEffect, useState } from 'react';
import WeatherIcon from './Icon';

const WeatherBox = ({ foday }) => {
    const[dat,setdat]=useState([])
    const [dict, setdict] = useState({})
    const getforecast=()=>{

          if(!foday){
    return null;
  }
  const dates=[];
  const all_weather={};
  
  foday.list.forEach((index)=>{
    const dt=index.dt_txt.split(" ")[0];
    if(!all_weather[dt]) all_weather[dt]=[];
    all_weather[dt].push(index)
    
    if (!dates.includes(dt)) {
  dates.push(dt);
}
  })
  setdat(dates);
  setdict(all_weather)
  console.log(all_weather)
    }
   useEffect(() => {
  getforecast();
}, [foday]);


  return (
    <div className="flex gap-4 backdrop-blur-md bg-white/10 border border-white/30 rounded-2xl shadow-lg p-4 w-fit h-[320px]">
     <div className='flex gap-4 border-4 '>
        {Object.entries(dict).map(([date,entry],idx)=>{
            const mid=entry[1];
            return( <div key={idx} className='border-2 w-[170px] p-4 pl-6 font-bold text-xl '>
    <div className='ml-4'>
        <WeatherIcon cod={mid.weather[0].id} cond={mid.weather[0].main}/>
        </div>
        <div className='ml-3 mt-4'>
            {date}
            </div>
            <div className='ml-6 text-2xl mt-4'>
        {mid.main.temp}<sup>°C</sup>
                </div>
                <div className='mt-8 ml-6'>
                    {mid.weather[0].main}
                    </div>
                </div>
        )})}</div> 
    </div>
  );
};

export default WeatherBox;
