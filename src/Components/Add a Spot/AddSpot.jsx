import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import DocumentTitle from "../../Title";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const AddSpot = () => {
    DocumentTitle("Add a Spot");
    const {user} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleAddSpot = e => {
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
        const user_name = user.displayName? user.displayName:null;
        const user_email = user.email? user.email:null;

        const spot = { tourist_spot_name, country_name, location, average_cost, seasonality,
             travel_time, total_visitors_per_year, short_description, image, user_email, user_name };
        console.log(spot);

        fetch('http://localhost:5000/addSpot', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(spot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Cool",
                        text: "Spot Added Successfully",
                        icon: "success"
                    });
                    form.reset();
                    navigate("/");
                }
            })

    }

    return (
        <div className="min-h-screen bg-base-200">
            <div className="hero-content flex-col w-3/4 mx-auto">
                <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
                    <div className="mx-auto my-8 lg:text-left">
                        <h1 className="text-3xl lg:text-5xl font-bold">Add a Spot</h1>
                    </div>
                    <form className="card-body" onSubmit={handleAddSpot}>
                        <div className="flex justify-between gap-5">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Spot Name</span>
                                </label>
                                <input type="name" placeholder="Eiffel Tower" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Country Name</span>
                                </label>
                                <input type="name" placeholder="France" name="country" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="flex justify-between gap-5">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input type="name" placeholder="Paris" name="location" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="name" placeholder="https://Eiffel-Tower.jpg" name="url" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="flex justify-between gap-5">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Average Cost</span>
                                </label>
                                <input type="name" placeholder="€20" name="cost" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Seasonality</span>
                                </label>
                                <input type="name" placeholder="Summer/ April-May" name="seasonality" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="flex justify-between gap-5">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Travel Time</span>
                                </label>
                                <input type="name" placeholder="5 days" name="tavel_time" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Total Visitor Per Year</span>
                                </label>
                                <input type="name" placeholder="350000" name="visitor" className="input input-bordered" required />
                            </div>
                        </div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Short Description</span>
                            </div>
                            <textarea className="textarea textarea-bordered h-24" name="description" placeholder="The Eiffel Tower is a wrought-iron lattice tower"></textarea>
                        </label>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddSpot;