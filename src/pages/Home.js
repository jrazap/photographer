import Layout from "../layout/layout";
import data from "../data/home.json";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="container">
          <Layout>
            <div
              className="home-content"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1 className="name">{data.content.name}</h1>
              <h4 className="job">{data.content.job}</h4>
            </div>
          </Layout>
        </div>
      </div>
    </>
  );
};

export default Home;
