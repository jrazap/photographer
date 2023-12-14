import Layout from "../layout/layout";
import data from "../data/albums.json";
import { Link } from "react-router-dom";

const Albums = () => {
  return (
    <Layout>
      <div className="albums">
        <div className="albums-content portfolio-content">
          <h1 className="title" data-aos="fade-up" data-aos-duration="1000">
            {data.content.title}
          </h1>
          <div className="box-container">
            {data.content.albums.map((album) => {
              return (
                <div
                  key={album.id}
                  className="box"
                  data-aos="fade-in"
                  data-aos-duration="2000"
                >
                  <Link to={`/albums/${album.slug}`}>
                    <img src={album.coverImg} alt="" />
                    <h3>{album.title}</h3>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Albums;
