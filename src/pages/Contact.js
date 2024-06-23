const Contact = () => {
  return (
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
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>First Name</label>
                      <input type="text" name="firstName" id="first-name" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Last Name</label>
                      <input type="text" name="lastName" id="last-name" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" name="email" id="email" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Phone</label>
                      <input type="tel" name="phone" id="phone" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Leave us a message...</label>
                      <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="7"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <button className="btn">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
