import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import data from "../data/portfolio.json";

const SingleWork = () => {
  const { workSlug } = useParams();
  const matchedWorks = data.content.works.filter(
    (work) => work.slug === workSlug
  );
  const work = matchedWorks[0];

  return (
    <>
      <Helmet>
        <title>Portfolio | {work.title}</title>
      </Helmet>

      <div className="album">
        <div className="container">
          <div className="content">
            <h1 className="title" data-aos="fade-up" data-aos-duration="1000">
              {work.title}
            </h1>
            <div className="box-container">
              <div className="row">
                <div className="box col-md-6">
                  {work.images.box_one.map((pic) => {
                    return (
                      <img
                        src={pic.url}
                        alt={pic.alt}
                        data-aos="fade-in"
                        data-aos-duration="2000"
                        key={pic.id}
                      />
                    );
                  })}
                </div>
                <div className="box col-md-6">
                  {work.images.box_two.map((pic) => {
                    return (
                      <img
                        src={pic.url}
                        alt={pic.alt}
                        data-aos="fade-in"
                        data-aos-duration="2000"
                        key={pic.id}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleWork;
