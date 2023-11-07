import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import CartCard from "./components/CartCard";


const Cart = () => {


    const loadedCarts = useLoaderData();
    const [carts, setCarts] = useState(loadedCarts)



    return (
        
        <div>
            
            <h1 className='text-6xl text-center font-extrabold  text-blue-400 my-20'>My All Carts 
              </h1>
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