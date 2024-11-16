import Image from "next/image"
const FeaturedProducts = () => {
    return (
        <div className="grid grid-col-1 sm:grid-cols-1 lg:grid-cols-3 justify-center gap-8 lg:gap-12 p-4 lg:p-8">
           
           {/*product 1/*/}
            <div className="container mx-auto px-4 md:px-8 flex flex-col items-center">
                <Image
                    src="/skincare.jpg"
                    alt="skin care set"
                    width={300}
                    height={300}
                    className="object-cover rounded-lg"
                />
                  <p className="text-center pt-4">Skin Care Set</p>
                  <p className="text-center pt-4"><s>Rs.10,000</s> Rs.8500</p>
                <div className="flex justify-center items-center my-3">

                    <button className="mt-3 px-8 py-3 bg-pink-600 text-white rounded-full">
                        Buy Now
                    </button>
                </div>
            </div>

            {/*product 2/*/}
            <div className="container mx-auto px-4 md:px-8 flex flex-col items-center">
                <Image
                    src="/hair care.jpg"
                    alt="hair care set"
                    width={300}
                    height={300}
                    className="object-cover rounded-lg"
                />
                  <p className="text-center pt-4">Hair Care Set</p>
                  <p className="text-center pt-4"><s>Rs.7,000</s> Rs.5,950</p>
                <div className="flex justify-center items-center my-3">

                    <button className="mt:3 px-8 py-3 bg-pink-600 text-white rounded-full">
                        Buy Now
                    </button>
                </div>
            </div>

            {/*product 3/*/}
            <div className="container mx-auto px-4 md:px-8 flex flex-col items-center">
                <Image
                    src="/bath and body.jpg"
                    alt="Product Three"
                    width={300}
                    height={300}
                    className="object-cover rounded-lg"
                />
                  <p className="text-center pt-4">Bath and Body </p>
                  <p className="text-center pt-4"><s>Rs.8000</s> Rs.6800</p>
                <div className="flex justify-center items-center my-3">

                    <button className="mt:3 px-8 py-3 bg-pink-600 text-white rounded-full">
                        Buy Now
                    </button>
                </div>
            </div>

           {/*product 4/*/}
            <div className="container mx-auto px-4 md:px-8 flex flex-col items-center">
                <Image
                    src="/highlighter.jpg"
                    alt="highlighter"
                    width={300}
                    height={300}
                    className="object-cover rounded-lg"
                />
                  <p className="text-center pt-4">highlighter</p>
                  <p className="text-center pt-4"><s>Rs.1000</s> Rs.850</p>
                <div className="flex justify-center items-center my-3">

                    <button className="mt-3 px-8 py-3 bg-pink-600 text-white rounded-full">
                        Buy Now
                    </button>
                </div>
            </div>

           {/*product 5/*/}
            <div className="container mx-auto px-4 md:px-8 flex flex-col items-center">
                <Image
                    src="/nailpaint.webp"
                    alt="nail paint"
                    width={300}
                    height={300}
                    className="object-cover rounded-lg"
                />
                  <p className="text-center pt-4">Nail Paint Set</p>
                  <p className="text-center pt-4"><s>Rs.2000</s> Rs.1700</p>
                <div className="flex justify-center items-center my-3">

                    <button className="mt:3 px-8 py-3 bg-pink-600 text-white rounded-full">
                        Buy Now
                    </button>
                </div>
            </div>

            {/*product 6/*/}
            <div className="container mx-auto px-4 md:px-8 flex flex-col items-center">
                <Image
                    src="/lip.jpg"
                    alt="lip kit"
                    width={300}
                    height={300}
                    className="object-cover rounded-lg"
                />
                  <p className="text-center pt-4">Lip Kit </p>
                  <p className="text-center pt-4"><s>Rs.6,000</s> Rs.5100</p>
                <div className="flex justify-center items-center my-3">

                    <button className="mt:3 px-8 py-3 bg-pink-600 text-white rounded-full">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProducts;