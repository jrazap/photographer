import { useParams } from "react-router-dom";
import Layout from "../layout/layout";
import data from "../data/albums.json";

const SingleAlbum = () => {
  const { albumSlug } = useParams();
  const matchedAlbums = data.content.albums.filter(
    (album) => album.slug === albumSlug
  );
  const album = matchedAlbums[0];
  return (
    <div className="album">
      <div className="container">
        <Layout>
          <div className="content">
            <h1 className="title" data-aos="fade-up" data-aos-duration="1000">
              {album.title}
            </h1>
            <div className="box-container">
              <div className="row">
                <div className="box col-md-6">
                  {album.images.box_one.map((pic) => {
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
                  {album.images.box_two.map((pic) => {
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

export default SingleAlbum;
