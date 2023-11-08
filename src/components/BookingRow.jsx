

const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
    // const { _id, price, date, service, img, status, customerName }= booking;
    const { _id, customerName, email, note, status } = booking;


    return (

        < tr >
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td> {customerName} </td>
            <td>{email}</td>
            <td>{note}</td>


            {/* <td>{date}</td>
                            <td>${price}</td> */}
            <th>
                {
                    status === 'confirm' ? <span>Confirm</span> :
                        <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
                }
            </th>
        </tr >
    );
};

export default BookingRow;