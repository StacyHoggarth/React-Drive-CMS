import { html, Component } from "../../deps/react.js";
import { StyleSheet, css } from "../../deps/aphrodite.js";
import { Link } from "../../deps/react-router-dom.js";
import Page from "../components/layout/page.js";
import resolveAsset from "../utils/resolveAsset.js";

let About = () => html`
  <${Page}
    title="About"
    subtitle="Stacy and Dell's Place"
    description="An easy way to publish articles directly from Google Drive"
    sidebarImage=${resolveAsset("/assets/default-about.jpg")}
    showLinks=${true}
  >
    <div className=${css(styles.content)}>
      <img
        src=${resolveAsset("/assets/react_logo.png")}
        className=${css(styles.image)}
      />
      <div className=${css(styles.info)}>
        <h1 className=${css(styles.title)}>Stacy And Dell's Place</h1>
        <p className=${css(styles.p)}>
          The home of the POD
        </p>
      </div>
    </div>

    <footer className=${css(styles.footer)}>
      <${Link} to="/contact" className=${css(styles.contact)}>
        Contact
      <//>
    </footer>
  <//>
`;

export default About;

let styles = StyleSheet.create({
  content: { display: "block" },
  image: {
    borderRadius: "50%",
    width: "150px",
    border: 0,
    maxWidth: "100%",
    verticalAlign: "middle",
    float: "left",
    marginRight: "2rem",
  },
  info: {},
  title: {
    margin: "30px 0 20px",
    fontSize: "3.8rem",
    fontWeight: 700,
    lineHeight: "1.1",
    fontFamily: '"Source Sans Pro",Helvetica,Arial,sans-serif',
  },
  p: {
    fontSize: "2rem",
    margin: "0 0 10px",
    marginBottom: "30px",
  },
  footer: {
    padding: "10px 0",
    fontSize: "1.4rem",
    letterSpacing: "1px",
    fontWeight: 700,
    fontFamily: '"Source Sans Pro",Helvetica,Arial,sans-serif',
    textTransform: "uppercase",
  },
  contact: {
    textDecoration: "none",
    backgroundColor: "transparent",
    color: "#999",
    borderBottom: "none",
    fontSize: "1.4rem",
    ":hover": {
      textDecoration: "none",
      backgroundColor: "transparent",
      color: "#333",
      outline: 0,
      transition: "all .4s",
      borderBottom: "none",
    },
  },
});
