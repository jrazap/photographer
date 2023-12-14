import Layout from "../layout/layout";
import data from "../data/home.json";

const Home = () => {
  return (
    <>
      <div className="home">
        <Layout>
          <div className="container">
            <div
              className="content"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1 className="name">{data.content.name}</h1>
              <h4 className="job">{data.content.job.toUpperCase()}</h4>
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
};

export default Home;
