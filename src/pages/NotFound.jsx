import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-vh-100 border-t-2 d-flex justify-content-center">
      <div className="container text-center">
        <h1 className="my-5 text-center primary_color font-bold text-8xl">404</h1>
        <p>We couldn't find the page you were looking for. Here are some options:</p>
        <ul>
          <li>Go back to the <Link className="secondary_color underline" to="/">homepage</Link>.</li>
          <li>Check the URL for any typos.</li>
        </ul>
      </div>
    </div>
  );
};

export default NotFound;