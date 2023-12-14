const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>
          <span>&copy; {new Date().getFullYear()} | Proudly created with</span>{" "}
          <a href="https://jrazap.com">Mohamed Elazap</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
