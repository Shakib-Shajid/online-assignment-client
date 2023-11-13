import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "./Navbar/Navbar";


const UpdtaeCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, date, details, photo } = coffee;


    const handleUpdateCoffee = event => {
        event.preventDefault();


        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        // const category = form.category.value;
        const date = form.date.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = { name, quantity, supplier, taste, date, details, photo }
        console.log(updatedCoffee);
        //send data to the server
        fetch(`https://online-assignment-server-psi.vercel.app/coffee/${_id}`, {

            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }



    return (
        <div>
            <Navbar></Navbar>
            <div className="p-5 lg:p-24">
                <h2 className="text-3xl font-extrabold text-center text-blue-400">Update Assignment Name: {name}</h2>
                <form onSubmit={handleUpdateCoffee}>
                    {/* form row */}
                    <div className="md:flex mb-7">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="name" defaultValue={name} placeholder="Coffee name" className="input input-bordered w-full " />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 lg:ml-4">
                            <label className="label">
                                <span className="label-text">Marks</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="quantity" defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form supplier row */}
                    <div className="md:flex mb-7">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier" className="input input-bordered w-full " />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2  lg:ml-4">
                            <label className="label">
                                <span className="label-text">Difficulty Level</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="taste" defaultValue={taste} placeholder="Taste" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>


                    {/* ///////category and details/////// */}
                    <div className="md:flex mb-7">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Due Date</span>
                            </label>
                            <label className="input-group">

                                <input type="date" name="date" defaultValue={date} placeholder="date" className="input input-bordered w-full " />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2  lg:ml-4">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="details" defaultValue={details} placeholder="Details" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* photo url */}
                    <div className="mb-7">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="photo" defaultValue={photo} placeholder="Photo Url" className="input input-bordered w-full " />
                            </label>
                        </div>

                    </div>


                    <input type="submit" value="Update Assignment" className="btn btn-block bg-success text-white" />

                </form>
            </div>
        </div>
    );
};

export default UpdtaeCoffee;


