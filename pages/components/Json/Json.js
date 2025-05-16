import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Products() {
    const [info, setinfo] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(response => response.json())
            .then(data1 => setinfo(data1))
    })
    return (
       <>
            <h1 className="text-center">E-commerce</h1>
            <div class="row">
            {
                info.map((value, index) => (
                    <>
                        <div class="col-lg-3 col-md-4 mb-3 mb-sm-0">
                            <div class="card">
                                <img src={value.image} className="card-img-top"/>
                                <div class="card-body">
                                    <h5 class="card-title">{value.title}</h5>
                                    <p class="card-text"><span className="fw-bold">₹ </span>{value.price}</p>
                                    <Link to={`/product/${value.id}`}><input type="button" class="btn btn-primary" value="View Details"/></Link>
                                </div>
                            </div>
                        </div>
                    </>
                    ))

            };
                </div>
        </>
                );
}