import { useContext, useEffect, useState } from "react";
import BookingRow from "./BookingRow";
import { AuthContext } from "../Provider/AuthProvider";
// import axios from "axios";


const Bookings = () => {
    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([])
    const url = `http://localhost:5000/bookings?email=${user?.email}`

    useEffect( () => {
    //     //axios korley airokom
    //     // axios.get(url, {withCredentials: true})
    //     // .then(res => {
    //     //     setBookings(res.data)
    //     // })

        // fetch(url, {credentials: 'include'})
        fetch(url)
        .then(res => res.json())
        .then(data => setBookings(data))
    }, [url])


    //delete
    const handleDelete = id => {
        const proceed = confirm('Are you delete');
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted success');

                        const remaining = bookings.filter(booking => booking._id !== id)
                        setBookings(remaining)
                    }
                })
        }
    }

    const handleBookingConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    //update state
                   const remaining = bookings.filter(booking => booking._id !==id);
                   const updated = bookings.find(booking => booking._id === id);
                   updated.status= 'confirm'
                   const newBookings = [updated, ...remaining];
                   setBookings(newBookings)
                }
            })

    }


    return (
        <div>
            <h1>Your bookings: {bookings.length}</h1>
            
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                               
                            </th>
                            {/* <th>Image</th> */}
                            <th>Name</th>
                            <th>Note</th>
                            <th>Email</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
           {

            bookings.map(booking => <BookingRow
             key={booking._id}
             booking={booking}
             handleDelete
            ={handleDelete}

                handleBookingConfirm={handleBookingConfirm}
            >

            </BookingRow>)
           }
                    
                      
                       
                    </tbody>
                 

                </table>
            </div>
        </div>
    );
};

export default Bookings;