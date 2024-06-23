import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | CKP</title>
      </Helmet>

      <section className="error-page">
        <div className="container">
          <h1 className="number">404</h1>
          <h2 className="status">Page Not Found</h2>
          <Link to="/" className="btn">
            Back to home
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;
