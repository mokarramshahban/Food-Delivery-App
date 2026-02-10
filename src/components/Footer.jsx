import { Link } from "react-router";
const currYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Copyright &copy; {currYear}, <strong>
          <Link to="/developer"> Mokarram Shahban</Link></strong>
      </p>
    </footer>
  );
};

export default Footer;