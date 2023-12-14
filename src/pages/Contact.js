import Layout from "../layout/layout";

const Contact = () => {
  return (
    <Layout>
      <div className="contact">
        <div className="contact-content">
          <h1 className="title" data-aos="fade-up" data-aos-duration="1000">
            Contact
          </h1>
          <div className="box-container">
            <div className="box" data-aos="fade-right" data-aos-duration="2000">
              <p>
                Charley Knox Is Represented <br />
                by United Creatives
              </p>
              <p>
                Mail: <a href="mailto:info@mysite.com">info@mysite.com</a>
              </p>
              <p>Phone: 123-456-7890</p>
            </div>
            <div className="box form" data-aos="fade-left" data-aos-duration="2000">
              <div className="tab">
                <div>
                  <label for="firstName">First Name</label>
                  <input type="text" name="firstName" id="" />
                </div>
                <div>
                  <label for="lastName">Last Name</label>
                  <input type="text" name="lastName" id="" />
                </div>
              </div>
              <div className="tab">
                <div>
                  <label for="email">Email</label>
                  <input type="email" name="email" id="" />
                </div>
                <div>
                  <label for="phone">Phone</label>
                  <input type="tel" name="phone" id="" />
                </div>
              </div>
              <label for="message">Leave us a message...</label>
              <textarea name="message" id="" cols="30" rows="10"></textarea>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
