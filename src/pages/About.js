import data from "../data/about.json";
import Layout from "../layout/layout";
import { LazyLoadImage } from "react-lazy-load-image-component";

const About = () => {
  return (
    <Layout>
      <div className="about-content">
        <h1 className="title" data-aos="fade-up" data-aos-duration="1000">
          Biography
        </h1>
        <div className="box-container">
          <div className="box" data-aos="fade-right" data-aos-duration="2000">
            <p>{data.content.text_one}</p>
            <p>{data.content.text_two}</p>
          </div>
          <div className="box" data-aos="fade-left" data-aos-duration="2000">
            <LazyLoadImage src={data.content.img} alt="" />
          </div>
          <div className="box" data-aos="fade-right" data-aos-duration="2000">
            <h1 className="title">{data.content.clients.title}</h1>
            <p>{data.content.clients.discription}</p>
          </div>
          <div
            className="box cli"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            {data.content.clients.pictures.map((pic) => {
              return <img src={pic.url} alt="" key={pic.id} />;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
