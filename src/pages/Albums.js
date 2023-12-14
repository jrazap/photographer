import Layout from "../layout/layout";
import data from "../data/albums.json";
import { Link } from "react-router-dom";

const Albums = () => {
  return (
    <div className="albums">
      <div className="container">
        <Layout>
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
        </Layout>
      </div>
    </div>
  );
};

export default Albums;
