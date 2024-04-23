import React, { useEffect, useState } from 'react';
import heroimg1 from "../../assets/images/hero-img01.png";
import heroimg2 from "../../assets/images/hero-img02.png";
import heroimg3 from "../../assets/images/hero-img03.png";
import icon1 from "../../assets/images/icon01.png";
function Home() {
  const [val , setval]=useState({
    year: 0,
    clinical: 0,
    patient: 0,
  });
  const [timerId, setTimerId] = useState({
    year: null,
    clinical: null,
    patient: null
  });
  useEffect(()=>{
    const yid=setInterval(()=>{
      console.log("YID", yid);
        setval((prev)=>{
          return {...prev, year: prev.year+1}
        });
    },30);

    const cid=setInterval(()=>{
      setval((prev)=>{
        return {...prev, clinical: prev.clinical+1}
      });
    },30);
    const pid=setInterval(()=>{
      setval((prev)=>{
        return {...prev, patient: prev.patient+1}
      });
    },30);
    setTimerId({year: yid, clinical: cid, patient: pid});
    
    return()=>{
      // console.log("Cleared ", yid);
      setval({clinical: 0, patient: 0, year: 0})
      clearInterval(yid);
      clearInterval(pid);
      clearInterval(cid);
    }


  },[]);
  
  useEffect(()=>{
    if(val.year===30 && timerId){
      clearInterval(timerId.year);
      setTimerId({year: null, clinical: null, patient: null});
    }
    if(val.clinical===15 && timerId){
      clearInterval(timerId.clinical);
    }
    if(val.patient===15 && timerId){
      clearInterval(timerId.patient);
    }
  }, [val])
  return (
    <>
      {/* hero section */}

      <section className="hero_section pt-[0px] 2xl:h-[600px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[40px]
                md:leading-[70px]">
                  We Help patients live a Healthy, longer Life.
                </h1>
                <p className='text_para'>
                Welcome to Aditi Hospital, where compassionate care meets cutting-edge technology. Our state-of-the-art facility offers diverse medical services, tailored to your needs. With a team of skilled professionals dedicated to personalized treatment, we prioritize your well-being. Experience the difference at Aditi Hospital, where you come first
                </p>
                <button className="btn ">Request an Appointment</button>
              </div>


                {/* hero countter */}
                <div className="mt-[20px] lg:mt-[20px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                   <div>
                      <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                        {val.year}
                        {val.year===30 && <span>+</span>}
                      </h2>
                      <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                      <p className="text_para">Years of Experience</p>
                   </div>
                   <div>
                      <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                        {val.clinical}
                        {val.clinical===15 && <span>+</span>}
                      </h2>
                      <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                      <p className="text_para">Clinical Experience</p>
                   </div>
                   <div>
                      <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                        {val.patient}
                        {val.patient===15 && <span>+</span>}
                      </h2>
                      <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                      <p className="text_para">Patient's Satisfaction</p>
                   </div>
                </div>
            </div>
            <div className='flex gap-[30px] justify-end '>
              <div>
                <img className="w-full mt-[30px]" src={heroimg1} alt="hero1" />
              </div>
              <div className='mt-[10px]'>
                <img className="w-full mb-[30px]" src={heroimg2} alt="hero1" />
                <img className="w-full" src={heroimg3} alt="hero1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HERO SECTION KHATAM  */}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className='heading text-center'>
              Providing the  Best Medical Services
            </h2>
            <p className='text-para text-center mt-4 font-[500] text-[20px]'>
              World Class care for Everyone. our Healthsystem offers unmatched , expert health care. 
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-[30px] mt-[30px] lg:[mt-55px] ">
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon1} alt=" "/>
                </div>
              </div>


          </div>
        </div>
      </section>
    </>
  )
}

export default Home;