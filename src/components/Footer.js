import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-[#D62828] mt-10 h-56 flex justify-center items-center flex-col text-white">
      <h1 className="text-3xl">🍴 FoodDelivery</h1>
      <p className="my-3">Crafted by Rajesh with 💻, ☕, and Swiggy APIs.</p>

      <div className="">
        <a href="https://github.com/rajeshlru" target="_blank" rel="noreferrer">
          {" "}
          <FontAwesomeIcon
            icon={faGithub}
            className="text-3xl  m-3 mb-0   bg-[#24292fd3] text-white rounded-md hover:bg-[#1b1f23]"
          />{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/rajesh-e-97ba6b356/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-3xl text-blue-600 hover:text-blue-800 m-3 mb-0"
          />
        </a>
      </div>

      <h6 className="my-3">© 2025 FoodDelivery | All rights reserved.</h6>
    </div>
  );
};
export default Footer;
