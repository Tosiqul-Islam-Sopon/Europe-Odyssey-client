import { FaHome } from "react-icons/fa";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="mx-auto w-fit text-center mt-40 space-y-4">
            <h1 className="text-5xl text-red-700">Oops!</h1>
            <p className="text-2xl">Sorry, an unexpected error has occurred.</p>
            <p className="text-xl text-red-500">
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to={"/"}><button className="btn mt-3 bg-green-500 text-white text-xl"><FaHome></FaHome> Home</button></Link>
        </div>
    );
}