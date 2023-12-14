import Layout from "../layout/layout";

const Portfolio = () => {
  return (
    <Layout>
      <div className="portfolio-content">
        <h1 className="title" data-aos="fade-up" data-aos-duration="1000">
          Recent Works
        </h1>
        <div className="box-container">
          <div className="box" data-aos="fade-in" data-aos-duration="2000">
            <a href="./portraits.html">
              <img src="../img/p1.webp" alt="" />
              <h3>Portraits</h3>
            </a>
          </div>
          <div className="box" data-aos="fade-in" data-aos-duration="2000">
            <a href="./places.html">
              <img src="../img/p2.webp" alt="" />
              <h3>Places</h3>
            </a>
          </div>
          <div className="box" data-aos="fade-in" data-aos-duration="2000">
            <a href="./fashion.html">
              <img src="../img/p3.webp" alt="" />
              <h3>Fashion</h3>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
