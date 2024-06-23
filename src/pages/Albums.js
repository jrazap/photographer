import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
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
                      <img src={album.coverImg} alt="" />
                      <div className="overlay">
                        <h3>{album.title}</h3>
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
