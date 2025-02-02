import Image from "next/image";
import ProductCard from "@/components/products";
import Feature from "@/components/feature";
import Banner from "@/components/banner";
import { client } from "@/sanity/lib/client";
import CartIcon from "@/components/cardicon";
import { urlFor } from "@/sanity/lib/image";
async function page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const product = await client.fetch(
    `*[_type=="product" && slug.current == $slug][0]`,
    { slug }
  );
  if (product) {
    return (
      <div className="">
        <div className="flex flex-col lg:flex-row">
          <div className="flex items-center justify-between">
            <div className="flex "></div>
            <Image
              src={urlFor(product.productImage).url()}
              alt={product.name}
              width={500}
              height={500}
              className="w-[650px] h-[500px] "
            />
          </div>
          <div className="lg:w-1/2 mt-20 lg:pl-8 mx-2">
            <h1 className="sm:text-4xl text-2xl font-bold mb-2">
              {product.title}
            </h1>
            <p className="text-gray-800 mb-4 pr-32">${product.price}</p>
            <p className="text-gray-800 mb-4 pr-32">{product.description}</p>
            <li>Premium material </li>
            <li>Handmade upholstery</li>
            <li>Quality timeless classic</li>
            <h1  className="mt-10">Dimensions</h1>
            <div className="my-5 flex gap-10">
                <p>Height <br /> 110cm</p>
                <p>Width <br /> 75cm</p>
                <p>Depth <br /> 50cm</p>

            </div>

            <div className="mb-4 justify-between flex flex-wrap  mitems-center gap-10">
              <div className="flex gap-5 items-center">
                <h1 className="text-1xl font-bold   ">Amount:</h1>
                <div className="border py-3 w-32 flex justify-around items-center border-gray-300 rounded-md">
                  <button className="text-2xl font-bold">-</button>
                  <span className="text-lg">{product.quantity}</span>
                  <button className="text-2xl font-bold">+</button>
                </div>
              </div>
              <button className="bg-[#2a254b]  px-4 py-4 ">
                <CartIcon id={product._id} />
              </button>
            </div>
          </div>
        </div>
        <hr className="my-10" />
        <ProductCard />
        <Feature />
        <Banner />
      </div>
    );
  } else {
    return <h1>Product not found</h1>;
  }
}

export default page;
