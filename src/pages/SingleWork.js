import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
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
                      <LazyLoadImage
                        key={pic.id}
                        src={pic.url}
                        alt={pic.alt}
                        width="100%"
                        height="auto"
                        data-aos="fade-in"
                        data-aos-duration="2000"
                      />
                    );
                  })}
                </div>
                <div className="box col-md-6">
                  {work.images.box_two.map((pic) => {
                    return (
                      <LazyLoadImage
                        key={pic.id}
                        src={pic.url}
                        alt={pic.alt}
                        width="100%"
                        height="auto"
                        data-aos="fade-in"
                        data-aos-duration="2000"
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
