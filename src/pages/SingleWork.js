import { useParams } from "react-router-dom";
import Layout from "../layout/layout";
import data from "../data/portfolio.json";

const SingleWork = () => {
  const { workSlug } = useParams();
  const matchedWorks = data.content.works.filter(
    (work) => work.slug === workSlug
  );
  const work = matchedWorks[0];
  return (
    <div className="album">
      <div className="container">
        <Layout>
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
        </Layout>
      </div>
    </div>
  );
};

export default SingleWork;
