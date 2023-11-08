import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Navbar from "./Navbar/Navbar";
import Swal from 'sweetalert2'



const Checkout = () => {
    const service = useLoaderData();
    const { _id } = service;
    const { user } = useContext(AuthContext)
    const handleBookService = event => {
        event.preventDefault();

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
        fetch('https://online-assignment-server-gq8flh6xl-shakib-shajid.vercel.app/bookings', {

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
                    // alert('service booked successfully')
                    if (data.insertedId) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Submitted successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                    }
                }
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <form onSubmit={handleBookService} className="card-body w-full lg:w-1/2 mx-auto">
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



                </div>
                <div className="form-control mt-6">

                    <input className="btn btn-primary btn-block" type="submit" value="Confirm Submit" />
                </div>
            </form>
        </div>

    );
};

export default Checkout;