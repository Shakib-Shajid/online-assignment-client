import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const AddCoffee = () => {
const handleCoffee = event =>{
    event.preventDefault();


    const form = event.target;

    const name= form.name.value;
    const quantity= form.quantity.value;
    const supplier= form.supplier.value;
    const taste= form.taste.value;
    const date= form.date.value;
    const details= form.details.value;
    const photo= form.photo.value;

    const newCoffee ={name, quantity, supplier, date, taste,details,photo}
    console.log(newCoffee);
    //send data to the server
    fetch('http://localhost:5000/coffee',{

    method:'POST',
    headers:{
        'content-type': 'application/json'
    },
    body: JSON.stringify(newCoffee)
    })
    .then(res=>res.json())
    .then(data =>{
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'Sucess!',
                text: 'User Added successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
        }
    })
}






    return (
        
       <div className=''>
            <h2 className="text-3xl p-10 font-extrabold text-center  text-blue-400">Add Assignment</h2>
            <div className="border    w-1/2    flex justify-center mx-auto  ">
                

                <form onSubmit={handleCoffee}>
                    {/* form row */}
                    <div className="md:flex mb-7 ">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="name" placeholder="Title" className="input input-bordered w-full " />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2  ml-4">
                            <label className="label">
                                <span className="label-text">Marks</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="quantity" placeholder="Marks" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form supplier row */}
                    <div className="md:flex mb-7">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Due Date</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered" required />

                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <label className="input-group">

                                <input type="email" name="supplier" placeholder="Email" className="input input-bordered w-full " />
                            </label>
                        </div>
                        
                    </div>


                    {/* ///////category and details/////// */}
                    <div className="md:flex mb-7">
                        <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Difficulty Level</span>
                        </label>
                        <label className="input-group">
                            {/* ............................................... */}

                            <select name="taste" className='input input-bordered w-full'>
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </select>
                            {/* ............................................... */}

                            {/* <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full" /> */}
                        </label>
                    </div>
                        {/* <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="category" placeholder="Category" className="input input-bordered w-full " />
                            </label>
                        </div> */}
                        <div className="form-control md:w-1/2  ml-4">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
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

                                <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered w-full " />
                            </label>
                        </div>

                    </div>
           

                    <input type="submit" value="Add Food" className="btn btn-block btn-error text-white mb-3" />

                <Link to='/'> <input type="submit" value="Go Back" className="btn btn-block btn-success text-white" /></Link>
                </form>
            </div>
       </div>
    );
};

export default AddCoffee;