import { useParams } from "react-router-dom";
import Layout from "../layout/layout";
import data from "../data/albums.json";

const SingleAlbum = () => {
  const { albumSlug } = useParams();
  const matchedAlbums = data.content.albums.filter(
    (album) => album.slug === albumSlug
  );
  const album = matchedAlbums[0];
  console.log(album.images.box_one);
  return (
    <div className="fashion">
      <Layout>
        <div className="fashion-content">
          <h1 className="title" data-aos="fade-up" data-aos-duration="1000">
            {album.title}
          </h1>
          <div className="box-container">
            <div className="box">
              {album.images.box_one.map((pic) => {
                return (
                  <img
                    src={pic.url}
                    alt={pic.alt}
                    data-aos="fade-in"
                    data-aos-duration="2000"
                  />
                );
              })}
            </div>
            <div className="box">
              {album.images.box_two.map((pic) => {
                return (
                  <img
                    src={pic.url}
                    alt={pic.alt}
                    data-aos="fade-in"
                    data-aos-duration="2000"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default SingleAlbum;
