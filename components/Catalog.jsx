import Image from "next/image";
import { products } from "@/data/products";


  
const Catalog = () => {
    return (
        <section id="catalog" className="py-12">
            <div className=" px-10 mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Shop Our Collection</h2>
                <div className="grid grid-cols-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                {products.reverse().slice(0,4).map(product => (
                    <div key={product.id} className="border p-4 mx-auto w-fit rounded-lg shadow-md shadow-zinc-200 hover:shadow-zinc-400 cursor-pointer flex flex-col justify-between">
                        <div className=" h-[200px] mb-4">
                            <Image src={product.image} alt={product.name} width={250} height={250} className="object-contain w-full h-full rounded"/>
                        </div>
                        <h3 className="sm:text-xl text-sm font-semibold mb-2">{product.name}</h3>
                        <p className="text-gray-600 mb-4 sm:text-md text-sm">{product.price}</p>
                        <a href="#" className="bg-green-500 text-white px-4 py-2 rounded text-center sm:text-md text-sm">View Product</a>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
};

export default Catalog;
