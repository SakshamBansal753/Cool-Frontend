import styles from "../style"


const Getstarted = () => {return (
    <div className={`${styles.flexCenter} w-[148px] h-[148px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}><div className={`${styles.flexCenter} flex-col bg-black w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">
            Get 
          </span>

        </p>
                  <img src="/src/assets/arrow-up.svg" className="w-[23px] h-[23px] object-contain"/>

      </div>
       <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">
            Started
          </span>
              </p>
      </div></div>
  )
}


export default Getstarted