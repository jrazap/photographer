import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import data from "../data/albums.json";

const Albums = () => {
  return (
    <>
      <Helmet>
        <title>Albums | CKP</title>
      </Helmet>

      <div className="albums">
        <div className="container">
          <div className="content">
            <h1 className="title" data-aos="fade-up" data-aos-duration="1000">
              {data.content.title}
            </h1>
            <div className="box-container">
              <div className="row">
                {data.content.albums.map((album) => {
                  return (
                    <Link
                      to={album.slug}
                      className="box col-lg-4 col-md-6"
                      data-aos="fade-in"
                      data-aos-duration="2000"
                      key={album.id}
                    >
                      <LazyLoadImage src={album.coverImg} alt="" />
                      <div className="overlay">
                        <p className="title">{album.title}</p>
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

export default Albums;
