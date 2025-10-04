import React,{useState} from 'react';

import { useEffect } from 'react';
import WeatherCard from './assets/WeatherCard.jsx';

const App = () => {
  const [SearchTerm, setSearchTerm] = useState("");
  const [serror, setserror] = useState("");
  const [Loading, setLoading] = useState(false)
  const [Weather, setWeather] = useState(null)
  const[Forecast,setForecast]=useState(null)
  const API_URL="https://api.openweathermap.org/data/2.5/weather"
  const API_KEY="Your APIKEY"

  const Fetch_data=async()=>{
    setLoading(true)
    setserror('')
    if(!SearchTerm) return;
try{
  const URL=`${API_URL}?q=${SearchTerm}&appid=${API_KEY}&units=metric`
  
  const response=await fetch(URL);
  if(!response.ok){
    throw new Error('FAiled TO load')
  }
  const data=await response.json();
  console.log(data)
 setWeather(data);
 const Second = `https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&units=metric&appid=${API_KEY}`
const Res=await fetch(Second);
  const result=await Res.json();
  console.log(result)
  setForecast(result)

}catch(e){
  console.log(e);
  setserror("Error fetching ");
}finally{
  setLoading(false)
}  }

  return (
    <main  >
      <div >
        <img src='rainb.png'    className='z-0  top-[30px] absolute w-[97%] h-[95vh] left-[30px] bottom-[150px]'/>
      <div className='z-10 relative top-[30px] left-[30px] '>
        <header className='mt-10 font-bold    ml-40'>
           <span className="inline-block bg-gradient-to-r from-purple-400 via-blue-400 to-red-400 bg-clip-text text-transparent text-3xl">
             Weather.com
             
           </span>
           <input type='text'placeholder="Search city" value={SearchTerm} onChange={(e)=>setSearchTerm(e.target.value)}  className='w-full bg-white px-4 py-3 rounded-lg mt-10 max-w-5xl mx-auto z-10 ml-34  ' />
           <button className='border bg-gradient-to-r from-purple-400 via-blue-400 to-red-400   text-3xl p-2 font-bold ml-5' onClick={Fetch_data}>Search</button>
        </header>

       
      </div>
      <div className='z-20 absolute text-amber-50 ml-9'>
        {Loading?(<div role="status">
    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span className="sr-only">Loading...</span>
</div>):serror?(<p className='text-white'>{serror}</p>):Weather?(<WeatherCard data={Weather} forecast={Forecast}/>):null}
      </div>
      </div>
    </main>
  );
};

export default App;
