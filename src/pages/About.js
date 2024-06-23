import { LazyLoadImage } from "react-lazy-load-image-component";
import data from "../data/about.json";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about-content">
          <h1 className="title" data-aos="fade-up" data-aos-duration="1000">
            Biography
          </h1>
          <div className="box-container">
            <div className="box bio">
              <div className="row">
                <div
                  className="item col-md-6"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                >
                  <p>{data.content.text_one}</p>
                  <p>{data.content.text_two}</p>
                </div>
                <div
                  className="item col-md-6"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                >
                  <LazyLoadImage
                    src={data.content.img}
                    alt=""
                    className="about_img"
                  />
                </div>
              </div>
            </div>
            <div className="box cli">
              <div className="row">
                <div
                  className="item col-md-6"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                >
                  <h1 className="title">{data.content.clients.title}</h1>
                  <p>{data.content.clients.discription}</p>
                </div>
                <div
                  className="item col-md-6"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                >
                  <div className="row">
                    {data.content.clients.pictures.map((pic) => {
                      return (
                        <div className="image col-md-4 col-6" key={pic.id}>
                          <img src={pic.url} alt="" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
