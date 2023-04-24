import Image from 'next/image';
import image from '@/public/Apple-iPhone-13.jpg'
import { EmptyStar, FullStar, HalfStar } from '../global/Icons';
import Link from 'next/link';

const products = [
    {
        name: 'Random Mobile Phone',
        price: 'Rs 19000.00',
        rating: 2.5,
        image,
        supplier: "ABC Mobile supplier"
    },
    {
        name: 'Another Random Phone',
        price: 'Rs 20000.00',
        rating: 5,
        image,
        supplier: "ABC Mobile supplier"
    },
    {
        name: 'Yet Another Phone',
        price: 'Rs 18000.00',
        rating: 3.5,
        image,
        supplier: "ABC Mobile supplier"
    },
    {
        name: 'Random Mobile Phone',
        price: 'Rs 19000.00',
        rating: 4,
        image,
        supplier: "ABC Mobile supplier"
    },
    {
        name: 'Another Random Phone',
        price: 'Rs 20000.00',
        rating: 2.5,
        image,
        supplier: "ABC Mobile supplier"
    },
    {
        name: 'Yet Another Phone',
        price: 'Rs 18000.00',
        rating: 3,
        image,
        supplier: "ABC Mobile supplier"
    },
    {
        name: 'Random Mobile Phone',
        price: 'Rs 19000.00',
        rating: 1.5,
        image,
        supplier: "ABC Mobile supplier"
    },
    {
        name: 'Another Random Phone',
        price: 'Rs 20000.00',
        rating: 3,
        image,
        supplier: "ABC Mobile supplier"
    },
    {
        name: 'Yet Another Phone',
        price: 'Rs 18000.00',
        rating: 1,
        image,
        supplier: "ABC Mobile supplier"
    },
    {
        name: 'Random Mobile Phone',
        price: 'Rs 19000.00',
        rating: 3.6,
        image,
        supplier: "ABC Mobile supplier"
    },
    {
        name: 'Another Random Phone',
        price: 'Rs 20000.00',
        rating: 2.7,
        image,
        supplier: "ABC Mobile supplier"
    },
    {
        name: 'Yet Another Phone',
        price: 'Rs 18000.00',
        rating: 2.5,
        image,
        supplier: "ABC Mobile supplier"
    },
    {
        name: 'Random Mobile Phone',
        price: 'Rs 19000.00',
        rating: 4,
        image,
        supplier: "ABC Mobile supplier"
    },
    {
        name: 'Another Random Phone',
        price: 'Rs 20000.00',
        rating: 3.5,
        image,
        supplier: "ABC Mobile supplier"
    },
    {
        name: 'Yet Another Phone',
        price: 'Rs 18000.00',
        rating: 5,
        image,
        supplier: "ABC Mobile supplier"
    },
];

function getRatingStars(rating) {
    const roundedRating = Math.round(rating * 2) / 2;
    const fullStars = Math.floor(roundedRating);
    const halfStars = Math.ceil(roundedRating - fullStars);
    const emptyStars = 5 - fullStars - halfStars;
    const stars = [];

    for (let i = 0; i < fullStars; i++)
        stars.push(<FullStar key={i} />);

    for (let i = 0; i < halfStars; i++)
        stars.push(<HalfStar key={i} />);

    for (let i = 0; i < emptyStars; i++)
        stars.push(<EmptyStar key={i} />);

    return stars;
}

const Products = () => {
    return (
        <div className="bg-white text-slate-800">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 py-16">
                {products.map((product, index) => (
                    <div key={index}>
                        <div className="bg-white shadow shadow-lg mx-auto shadow-purple-300 w-[240px]">
                            <div className="relative flex flex-col items-center w-full">
                                <Image
                                    src={product.image}
                                    width={240}
                                    height={240}
                                    alt={product.name}
                                />
                            </div>
                            <div className="flex flex-col p-2">
                                <h3 className="text-md text-slate-900">{product.name}</h3>
                                <p className="text-gray-600 font-bold text-sm">{product.price}</p>
                                <span className="rating flex text-yellow-500 text-xl">
                                    {getRatingStars(product.rating)}
                                </span>
                                <span className='text-slate-600 text-xs italic my-1'>
                                    <Link href={"/supplier"}>{product.supplier}</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default Products;
