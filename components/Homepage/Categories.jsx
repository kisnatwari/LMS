import Image from 'next/image'
import React from 'react'
import electronics from '@/public/Electronics.jpg'
import animals from '@/public/animals and pet.png'
import apparel from '@/public/apparel and accessories.png'
import camera from '@/public/camera & optics.jpg'
import health from '@/public/health & beauty.jpg'
import business from '@/public/business & industrial.jpg'
import hardware from '@/public/hardware.jpg'
import vehicle from '@/public/vehicle and parts.jpg'
import toys from '@/public/toys and games.jpg'
import liveAnimals from '@/public/live animals.jpg'
import sporting from '@/public/sporting goods.jpg'

import Link from 'next/link'

const Categories = () => {
    const categoriesList = [
        { image: electronics, name: 'Electronic Items' },
        { image: animals, name: 'Animals & Pets' },
        { image: apparel, name: 'Apparel & Accessories' },
        { image: camera, name: 'Camera & Optics' },
        { image: health, name: 'Health & Beauty' },
        { image: business, name: 'Business & Industrial' },
        { image: hardware, name: 'Hardware' },
        { image: vehicle, name: 'Vehicle & Parts' },
        { image: toys, name: 'Toys & Games' },
        { image: liveAnimals, name: 'Live Animals' },
        { image: sporting, name: 'Sporting Goods' },
    ]
    const ProductCard = ({ image, name, link = "#" }) => {
        return (
            <>
                <Link href="#">
                    <div className='w-24 text-center leading-3'>
                        <div className="relative w-full h-24">
                            <Image src={image} width={96} height={96} alt={image} />
                        </div>
                        <span className='text-xs'>{name}</span>
                    </div>
                </Link>
            </>
        )
    }

    return (
        <>
            <div className='w-full bg-white text-center text-slate-800 mb-3'>
                <span>All Categories</span>
                <div className="container py-4 mx-auto flex justify-center gap-8 flex-wrap">
                    {
                        categoriesList.map((category, index) => {
                            return <ProductCard key={index} image={category.image} name={category.name} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Categories