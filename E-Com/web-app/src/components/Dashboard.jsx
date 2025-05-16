import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

export default function Dashboard() {

    axios.get("https://fakestoreapi.com/products")
        .then((res)=>setProduct(res.data))

    const [product,setProduct] = useState([{
        title: "Nike",
        description: "Nike is a globally recognized athletic footwear and apparel brand known for its innovative designs",
        image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
    },
    {
        title: "Bata",
        description: "Bata offers stylish, durable, and affordable footwear for everyday comfort and fashion.",
        image: "https://m.media-amazon.com/images/I/81DLT8iEveL._SL1500_.jpg"
    },
    {
        title: "Roaster",
        description: "Roaster delivers trendy, casual fashion with a rugged edge for the modern adventurer.",
        image: "https://www.il48scarpe.com/media/articoli/1941-_7003297.jpg"
    }
    ])

    return (
        <>
            {/* {Navbar} */}
            <Navbar />

            {/* Corousel */}
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="https://www.shutterstock.com/image-vector/colorful-discount-sale-podium-special-260nw-2055955985.jpg"
                        className="w-full h-[300px]" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                        className="w-full h-[300px]" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                        className="w-full h-[300px]" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                        className="w-full h-[300px]" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            {/* Cards */}
            <div className='flex justify-around'>
                {
                    product.map((value,index)=>
                        index<3 &&
                        <div className="card bg-base-100 w-96 shadow-sm">
                            <figure>
                                <img
                                    src={value.image}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{value.title}</h2>
                                <p>{value.description}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </>
    )
}
