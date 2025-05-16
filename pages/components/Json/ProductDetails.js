import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function ProductsDetails() {
    const [data, setData] = useState([])
    var {id}=useParams()
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/"+id)
            .then(responce => responce.json())
            .then(info1 => setData(info1))
    },[])
    console.log(data)
    return (
        <>
        <div className="row">
            {
                <>
                    <div className="col-lg-6">
                        <img src={data.image} />
                    </div>
                    <div className="col-lg-6">
                        <div className="fw-bold">{data.title}</div>
                        <div>{data.description}</div>
                        <div><span className="fw-bold"> ₹ </span>{data.price}</div>
                    </div>
                </>
            };
        </div>
        </>
    );
}