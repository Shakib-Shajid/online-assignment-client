import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";


const CoffeeCard = ({coffees, setCoffees,coffee}) => {
    const { user } = useContext(AuthContext);


    const {_id, name, quantity, supplier, taste, date, details, photo }= coffee;

//delete
const handleDelete = _id =>{
   
   
    console.log("supplier",supplier)
    console.log("user",user.email)
console.log(_id);
if(user.email === supplier){
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
    
        if (result.isConfirmed) {
                    
            // if(user === )
            fetch(`http://localhost:5000/coffee/${_id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
               
                if(data.deletedCount > 0){

                    Swal.fire(
                        'Deleted!',
                        'Your Coffe has been deleted.',
                        'success'
                    )

                    const remaining = coffees.filter(cof => cof._id !==  _id);
                    setCoffees(remaining)
                }
            })
        }

    
    })
}
else{
    Swal.fire(
        'Email Does not Match!',
        'Your can not delete.',
        'failed'
    )
}
    
}


    return (
            // <Link to='/coffee'>
        <div className="card border card-side bg-base-100 shadow-xl mb-5 flex flex-col lg:flex-row ">
            <img src={photo} className="h-3/4 w-2/4 lg:mr-4 mx-auto my-auto" alt={name} />
            <div className="w-full lg:w-1/2 pr-4  my-auto">
               <div className="text-start space-y-1 p-3">
                    <h2 className="text-3xl font-bold text-green-600">Name: {name}</h2>
                    <p><span className="font-bold"> Quantity:</span> {quantity}</p>
                    <p><span className="font-bold"> Supplier Name:</span> {supplier}</p>
                    <p><span className="font-bold"> Taste:</span> {taste}</p>
                    <p><span className="font-bold"> Date:</span> {date}</p>
                    <p><span className="font-bold"> Details:</span> {details}</p>
                    {/* <p>Photo URL: {photo}</p> */}
               </div>
                <div className="card-actions mt-4">
                    <div className="btn-group  lg:btn-group-horizontal space-x-2 lg:space-x-3">
                        {/* <button className="btn">View</button> */}

                        <Link to={`coffee/${_id}`}>
                            <button className="btn ml-4 lg:ml-0">View</button>
                        </Link>
                       <Link to ={`updateCoffee/${_id}`}>
                            <button className="btn">Update</button>
                       </Link>
                        <button 
                            onClick={() => handleDelete(_id) }
                        
                        className="btn bg-orange-600">Delete</button>
                    </div>
                </div>
            </div>
            
        </div>
        // </Link>
    );
};

export default CoffeeCard;