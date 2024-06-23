import { Helmet } from "react-helmet";
import data from "../data/home.json";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Charley Knox Photography</title>
      </Helmet>

      <div className="home">
        <div className="container">
          <div
            className="home-content"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1 className="name">{data.content.name}</h1>
            <h4 className="job">{data.content.job}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
