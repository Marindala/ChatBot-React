import img from "../../../public/Mi.png";
import { BsLinkedin, BsGithub } from "react-icons/bs";



const Footer = () => {
  return (
    <footer id="root" style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.column}>
          <h1 style={styles.heading}>ChatBot React Marindala</h1>
          <ul style={styles.list}>
          <a
                href="https://www.linkedin.com/in/marina~lopez/"
                target="_blank"
                style={styles.link}
                rel="noreferrer noopener"
              >
                <BsLinkedin></BsLinkedin>
              </a>
            
           
            
           {/*  <li>
              <a href="#" style={styles.link}>
              
              </a>
            </li> */}
            <li>
              <a style={styles.link}
                href="https://github.com/Marindala/"
                target="_blank"
                rel="noreferrer noopener"
              >{/*  Github */}
                <BsGithub></BsGithub>
              </a>
            </li>
            <li></li>
          </ul>
        </div>
       {/*  <div style={styles.column}>
          <ul style={styles.list}>
            <li></li>
          </ul>
        </div> */}
        <div style={styles.column}>
          <ul style={styles.list}></ul>
        </div>
        <div style={styles.column}>
          <img src={img} alt="Logo" style={styles.logo} />
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const styles = {
  footer: {
    width: "100%",
    backgroundColor: "white",
    color: "#7D3C98",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    borderTop: "2px solid #ccc",
  },
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "6em",
    minHeight: "100vh",
  },
  container: {
    maxWidth: "1200px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    textAlign: "center",
  },
  column: {
    width: "25%",
    marginBottom: "1rem",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
  },
  list: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    textAlign: "center",
    listStyleType: "none",
    gap: "1rem",
    margin: 0,
    padding: 0,
  },
  link: {
    color: "#ccc",
    textDecoration: "none",
    fontSize: "2.5rem",
  },
  logo: {
    width: "70%",
    paddingTop: "0.5rem",
    paddingLeft: 0,
  },
  location:{
    fontSize: "1.5rem",
  }
};
