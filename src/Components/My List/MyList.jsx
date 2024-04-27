import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import DocumentTitle from "../../Title";

const MyList = () => {
    DocumentTitle("My List")
    const loadedData = useLoaderData();
    const [spots, setSpots] = useState(loadedData);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/spots/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount) {
                            const remaining = spots.filter(spot => spot._id !== id);
                            setSpots(remaining);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className="mt-10">
            {
                spots.length ? <>
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>S.I</th>
                                    <th>Name</th>
                                    <th>Country</th>
                                    <th>Average Cost</th>
                                    <th>Visitors Per Year</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    spots.map((spot, index) => <>
                                        <tr key={spot._id} className="hover:bg-gray-100">
                                            <th>{index + 1}</th>
                                            <td>{spot.tourist_spot_name}</td>
                                            <td>{spot.country_name}</td>
                                            <td>{spot.average_cost}</td>
                                            <td>{spot.total_visitors_per_year}</td>

                                            <td><Link to={`/updateSpot/${spot._id}`}><button className="btn">Update</button></Link></td>
                                            <td><button onClick={() => handleDelete(spot._id)} className="btn">Delete</button></td>
                                        </tr>
                                    </>)
                                }

                            </tbody>
                        </table>
                    </div>
                </>
                    :
                    <h1 className="text-3xl font-bold text-center">No Spot Available</h1>
            }

        </div>
    );
};

export default MyList;