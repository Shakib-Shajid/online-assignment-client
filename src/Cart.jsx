import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import CartCard from "./components/CartCard";
import Navbar from "./components/Navbar/Navbar";


const Cart = () => {


    const loadedCarts = useLoaderData();
    const [carts, setCarts] = useState(loadedCarts)



    return (

        <div>
            <Navbar></Navbar>
            <h1 className='text-6xl text-center font-extrabold  text-blue-400 my-20'>My All Create Assignment</h1>
            <div className='grid md:grid-cols-2 gap-6 '>

                {

                    carts.map(cart => <CartCard
                        key={cart._id}
                        cart={cart}

                        carts={carts}
                        setCarts={setCarts}

                    ></CartCard>)
                }
            </div>
        </div>
    );
};

export default Cart;