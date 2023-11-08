
import { Link, useLoaderData } from "react-router-dom";

import Swal from "sweetalert2";




const CoffeeDetails = () => {


    const handleAddToCart = () => {
        const cartname = name;
        const cartquantity = quantity;
        const cartsupplier = supplier;
        const carttaste = taste;
        const cartcategory = date;
        const cartdetails = details;
        const cartphoto = photo;
        const newCart = { cartname, cartsupplier, cartcategory, cartdetails, cartquantity, carttaste, cartphoto }
        console.log(newCart);


        //send data to the server cart
        fetch('http://localhost:5000/cart', {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCart)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Sucess!',
                        text: 'User Added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }
            })


    }

    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, date, details, photo } = coffee;
    return (



        <div className="flex flex-col lg:flex-row text-center items-center justify-center mt-3 lg:mt-10 space-y-6">
            <img className="h-1/3 w-1/3 mr-5" src={photo} alt="" />
            <div>
                <h2 className="text-3xl font-bold text-green-600">Name: {name}</h2>
                <p><span className="font-bold"> Quantity:</span> {quantity}</p>
                <p><span className="font-bold"> Supplier Name:</span> {supplier}</p>
                <p><span className="font-bold"> Taste:</span> {taste}</p>
                <p><span className="font-bold"> Date:</span> {date}</p>
                <p><span className="font-bold"> Details:</span> {details}</p>
            </div>

            <Link className="">
                <button onClick={handleAddToCart} className="btn btn-outline btn-accent mt-4 mr-3">Add to Cart</button>
                <Link to={`/checkout/${_id}`}>
                    <button className="btn btn-outline btn-accent mt-4 ">Take Assignment</button>
                </Link>
            </Link>


        </div>
    );
};

export default CoffeeDetails;