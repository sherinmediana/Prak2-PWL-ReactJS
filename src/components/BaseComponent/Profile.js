import React from "react";
import { createUseStyles } from "react-jss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export const Profile = () => {
  const styles = style();

  const link_ig = "https://www.instagram.com/sherinmedianaa/";

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.row}>
          <h1>Sherin Mediana Putri</h1>
        </div>
        <div className={styles.row}>
          <p>Informatics Engineering Student</p>
        </div>
        <div className={styles.row}>
          <a
            href={link_ig}
            className={styles.socialLink}
            onClick={() => console.log("asdasd")}
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://github.com/sherinmediana/" className={styles.socialLink}>
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
};

const style = createUseStyles({
  background: {
    height: "100vh",
    width: "99vw",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    color: "black",
    height: "75vh",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  socialLink: {
    color: "black",
    margin: "5px 10px",
  },
});

export default Profile;
