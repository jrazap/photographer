import { useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();
  return (
    <footer className={pathname === "/" ? "home-footer" : ""}>
      <div className="container">
        <p>
          <span>&copy; {new Date().getFullYear()} | Proudly created with</span>{" "}
          <a aria-label="jrazap" href="https://jrazap.com">
            Mohamed Elazap
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
