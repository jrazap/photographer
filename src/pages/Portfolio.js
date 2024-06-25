import { Link } from "react-router-dom";
import data from "../data/portfolio.json";
import { Helmet } from "react-helmet";

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio | CKP</title>
      </Helmet>

      <div className="portfolio">
        <div className="container">
          <div className="content">
            <h1 className="title" data-aos="fade-up" data-aos-duration="1000">
              {data.content.title}
            </h1>
            <div className="box-container">
              <div className="row">
                {data.content.works.map((work) => {
                  return (
                    <Link
                      to={work.slug}
                      className="box col-lg-4 col-md-6"
                      data-aos="fade-in"
                      data-aos-duration="2000"
                      key={work.id}
                    >
                      <img src={work.coverImg} alt="" />
                      <div className="overlay">
                        <p className="title">{work.title}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
