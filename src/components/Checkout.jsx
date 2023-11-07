import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";



const Checkout = () => {
    const service = useLoaderData();
    const { title, _id } = service;
    const { user } = useContext(AuthContext)
    const handleBookService = event => {
        event.preventDefault();

        // const form = event.target;
        // const name = form.name.value;
        // const date = form.date.value;
        // const email = user?.email;
        const form = event.target;
        const name = form.name.value;
        const note = form.note.value;
        const email = user?.email;
        const booking = {
            customerName: name,
            email,
            note,
            service: _id,       //error
            // price: price
        }
        console.log(booking)
        fetch('http://localhost:5000/bookings', {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('service booked successfully')
                }
            })
    }
    return (
        <div>
            <h2>Book Service:{title} </h2>


            <form onSubmit={handleBookService} className="card-body w-1/2 mx-auto">
                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
                <div>
                         <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" defaultValue={user?.email} name="email" placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PDF Link</span>
                        </label>
                        <input type="text" placeholder="PDF Link" name="name" className="input input-bordered" required />
                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Note</span>
                        </label>
                        <textarea className="textarea textarea-bordered" name="note" placeholder="Note"></textarea>
                    </div>


                    {/* <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due amount</span>
                        </label>
                        <input type="text" defaultValue={'$' + price} className="input input-bordered" required />

                    </div> */}
                </div>
                <div className="form-control mt-6">
                    {/* order confirm */}

                    <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>

    );
};

export default Checkout;