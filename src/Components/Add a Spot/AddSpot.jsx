import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import DocumentTitle from "../../Title";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Bounce, Fade } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";

const AddSpot = () => {
    DocumentTitle("Add a Spot");
    const { user } = useContext(AuthContext);

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
        const user_name = user.displayName ? user.displayName : null;
        const user_email = user.email ? user.email : null;

        const spot = {
            tourist_spot_name, country_name, location, average_cost, seasonality,
            travel_time, total_visitors_per_year, short_description, image, user_email, user_name
        };
        console.log(spot);

        fetch('https://europe-odyssey-server.vercel.app/addSpot', {
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
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                      });
                    form.reset();
                    navigate("/");
                }
            })

    }

    return (
        <div className="min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:w-3/4 mx-auto">
                <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
                    <Bounce>
                        <h1 className="text-4xl font-bold text-center mt-5">
                            <Typewriter
                                words={['Add a Spot']}
                                typeSpeed={100}
                            />
                        </h1>
                    </Bounce>
                    <form className="card-body" onSubmit={handleAddSpot}>
                        <Fade>
                            <div className="flex flex-col lg:flex-row justify-between gap-5">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Spot Name</span>
                                    </label>
                                    <input type="name" placeholder="Eiffel Tower" name="name" className="input input-bordered" required />
                                </div>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Select Country Name</span>
                                    </div>
                                    <select className="select select-bordered" name="country" required>
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
                                    <input type="name" placeholder="Paris" name="location" className="input input-bordered" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="name" placeholder="https://Eiffel-Tower.jpg" name="url" className="input input-bordered" required />
                                </div>
                            </div>
                        </Fade>
                        <Fade>
                            <div className="flex flex-col lg:flex-row justify-between gap-5">
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
                        </Fade>
                        <Fade>
                            <div className="flex flex-col lg:flex-row justify-between gap-5">
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
                        </Fade>
                        <Fade>
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">Short Description</span>
                                </div>
                                <textarea className="textarea textarea-bordered h-24" name="description" placeholder="The Eiffel Tower is a wrought-iron lattice tower"></textarea>
                            </label>
                        </Fade>
                        <Fade>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add</button>
                            </div>
                        </Fade>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddSpot;