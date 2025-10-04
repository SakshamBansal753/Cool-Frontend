
import {appleImg, bagImg, searchImg} from '../utils'
import {navLists} from '../constants';
const Navbar = () => {
  return (
   <header className='w-full py-9 sm:px-5 flex justify-between items-center'>
    <nav className='flex w-full scrim-max-width'>
        <img src={appleImg} alt="Apple" width={14} height={18}/>
        <div  className='flex flex-1 justify-center max-sm:hidden'>
            {navLists.map((nav)=>{
               return(<div key={nav} className='px-8  mx-auto text-sm cursor-pointer text-gray-400 hover:text-white transition-all'>
                    {nav}
                    </div>
               )
            })}
        </div>
        <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
            <img src={searchImg} width={18} height={18}/>
            <img src={bagImg} width={18} height={18}/>
        </div>
    </nav>
   </header>
  )
}

export default Navbar