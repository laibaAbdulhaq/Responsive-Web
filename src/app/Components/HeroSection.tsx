 import Image from "next/image";
 import React from "react";
 function HeroSection(){
    return(
        
        <section className="text-pink-400 py-10 px-6 sm:py-20 sm:px-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start max-w-7xl mx-auto gap-8">

             {/*left section*/}

            <div className="flex-1 text-center lg:text-left lg:pt-8">
               <h1 className=" text-4xl 
                 text-pink-700 
                 md:text-pink-700
                 lg:text-pink-700
                 sm:text-5xl  md:text-5xl lg:text-2xl font-extrabold py-0 mb-4 lg:mb-2">
                 11.11 SALE-UP TO 85% OFF! SHOP NOW </h1>
                    <p className="text-black text-sm sm:text-lg lg:text-xl mb-6  ">
                     "Discover the beauty you deserve with Allure Beauty. This 11.11, indulge in our exclusive sale with discounts
                      up to 85% off on our premium skincare, makeup, and self-care products.
                      From nourishing creams to vibrant lip colors, we offer everything you need to look and feel your best.
                       Don't miss out on these limited-time offers designed just for you. 
                      Embrace your beauty journey with us, and let's make this season one to remember!"
                    </p>

            <div>
                <button className="px-6 py-3 rounded-full text-black bg-gradient-to-br from-pink-300 to via-pink-600 to bg-pink-200 hover:bg-slate-300 transition-all">Shop Now</button>
            </div>

            </div>

             {/*right section*/}

            <div className="flex-1 flex justify-center lg:justify-end lg:items-start ">
            <div className="rounded-full w-64 h-64 sm:w-72 lg:w-[400px] lg:h-[400px] overflow-hidden shadow-lg">
                  <img src="/banner.jpg" alt="hero image" className="w-full h-full object-cover" />
            </div>
            </div>
            </div>
        </section>
    )
}
export default HeroSection;