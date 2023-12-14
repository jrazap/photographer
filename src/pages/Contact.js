import Layout from "../layout/layout";

const Contact = () => {
  return (
    <Layout>
      <div className="contact">
        <div className="container">
          <div className="contact-content content">
            <h1 className="title" data-aos="fade-up" data-aos-duration="1000">
              Contact
            </h1>
            <div className="box-container">
              <div className="row">
                <div
                  className="box col-md-6"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                >
                  <p>Charley Knox Is Represented by United Creatives</p>
                  <p>
                    Mail: <a href="mailto:info@mysite.com">info@mysite.com</a>
                  </p>
                  <p>Phone: 123-456-7890</p>
                </div>
                <div
                  className="box col-md-6 form"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                >
                  <div className="tab">
                    <div>
                      <label for="firstName">First Name</label>
                      <input type="text" name="firstName" id="first-name" />
                    </div>
                    <div>
                      <label for="lastName">Last Name</label>
                      <input type="text" name="lastName" id="last-name" />
                    </div>
                  </div>
                  <div className="tab">
                    <div>
                      <label for="email">Email</label>
                      <input type="email" name="email" id="email" />
                    </div>
                    <div>
                      <label for="phone">Phone</label>
                      <input type="tel" name="phone" id="phone" />
                    </div>
                  </div>
                  <label for="message">Leave us a message...</label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="7"
                  ></textarea>
                  <button>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
