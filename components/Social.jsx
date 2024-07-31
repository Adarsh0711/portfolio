import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      <a href="https://github.com/Adarsh0711" className={iconStyles} aria-label="Github">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/bandaruadarsh/" className={iconStyles} aria-label="LinkedIn">
        <FaLinkedin />
      </a>
      <a href="https://www.instagram.com/bandaru_adarsh/?hl=en" className={iconStyles} aria-label="Instagram">
        <FaInstagram />
      </a>
    </div>
  );
};

export default Social;
