import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import DocumentTitle from "../../Title";
import { Bounce, Fade } from "react-awesome-reveal";

const UpdateSpot = () => {
    DocumentTitle("Update Spot");
    const spot = useLoaderData();

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const { _id, image, tourist_spot_name, short_description, country_name, location,
        travel_time, average_cost, total_visitors_per_year,
        seasonality, user_name, user_email } = spot;

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const tourist_spot_name = form.name.value;
        const country_name = form.country.value;
        const location = form.location.value;
        const average_cost = form.cost.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.tavel_time.value;
        const total_visitors_per_year = form.visitor.value;
        const short_description = form.description.value;
        const image = form.url.value;

        const updatedSpot = {
            tourist_spot_name, country_name, location, average_cost, seasonality,
            travel_time, total_visitors_per_year, short_description, image, user_email, user_name
        };
        console.log(updatedSpot);

        fetch(`http://localhost:5000/updateSpot/${_id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Spot Updated Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate(`/myList/${user?.email}`);
                }
                else {
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: "Update failed!!!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div className="min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:w-3/4 mx-auto">
                <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
                    <div className="mx-auto my-8 lg:text-left">
                        <Bounce>
                            <h1 className="text-3xl lg:text-5xl font-bold">Update a Spot</h1>
                        </Bounce>
                    </div>
                    <form className="card-body" onSubmit={handleUpdate}>
                        <Fade>
                            <div className="flex flex-col lg:flex-row justify-between gap-5">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Spot Name</span>
                                    </label>
                                    <input type="name" defaultValue={tourist_spot_name} placeholder="Eiffel Tower" name="name" className="input input-bordered" required />
                                </div>

                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Select Country Name</span>
                                    </div>
                                    <select defaultValue={country_name} className="select select-bordered" name="country" required>
                                        <option disabled selected>Country Name</option>
                                        <option>France</option>
                                        <option>Italy</option>
                                        <option>Spain</option>
                                        <option>England</option>
                                        <option>Netherlands</option>
                                        <option>Switzerland</option>
                                    </select>
                                </label>
                            </div>
                        </Fade>
                        <Fade>
                            <div className="flex flex-col lg:flex-row justify-between gap-5">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Location</span>
                                    </label>
                                    <input type="name" defaultValue={location} placeholder="Paris" name="location" className="input input-bordered" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="name" defaultValue={image} placeholder="https://Eiffel-Tower.jpg" name="url" className="input input-bordered" required />
                                </div>
                            </div>
                        </Fade>
                        <Fade>
                            <div className="flex flex-col lg:flex-row justify-between gap-5">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Average Cost</span>
                                    </label>
                                    <input type="name" defaultValue={average_cost} placeholder="€20" name="cost" className="input input-bordered" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Seasonality</span>
                                    </label>
                                    <input type="name" defaultValue={seasonality} placeholder="Summer/ April-May" name="seasonality" className="input input-bordered" required />
                                </div>
                            </div>
                        </Fade>
                        <Fade>
                            <div className="flex flex-col lg:flex-row justify-between gap-5">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Travel Time</span>
                                    </label>
                                    <input type="name" defaultValue={travel_time} placeholder="5 days" name="tavel_time" className="input input-bordered" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Total Visitor Per Year</span>
                                    </label>
                                    <input type="name" defaultValue={total_visitors_per_year} placeholder="350000" name="visitor" className="input input-bordered" required />
                                </div>
                            </div>
                        </Fade>
                        <Fade>
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">Short Description</span>
                                </div>
                                <textarea className="textarea textarea-bordered h-24" defaultValue={short_description} name="description" placeholder="The Eiffel Tower is a wrought-iron lattice tower"></textarea>
                            </label>
                        </Fade>
                        <Fade>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Update</button>
                            </div>
                        </Fade>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateSpot;