import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { COLOR_THEME } from "../../utils/tema";
import Swal from "sweetalert2";
import _ from "lodash";

export const Card = (props) => {
  const styles = style();
  const [project, setProject] = useState({});

  const fetchProject = async () => {
    const response = await fetch(
      `https://server-sherinmediana.herokuapp.com/api/projects/${props.project.id}`
    );
    setProject({
      project: await response.json(),
    });
  };

  useEffect(() => {
    fetchProject();
  }, []);

  const comment = async () => {
    console.log(project.project.project.comments);
    const { value: text } = await Swal.fire({
      html:
        `<h3>${project.project.project.name}</h3>` +
        `<h4>Comment</h4>` +
        `<ul>` +
        _.map(project.project.project.comments, (comment) => {
          return `<li>${comment.name} : ${comment.comment}</li>`;
        }).join("") +
        `</ul>`,
      input: "textarea",

      inputPlaceholder: "Type your comment here...",
      inputAttributes: {
        "aria-label": "Type your comment here",
      },
      showCancelButton: true,
    });
    if (text) {
      const response = await fetch(`https://server-sherinmediana.herokuapp.com/api/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          project_id: project.project.project.id,
          name: "guest",
          comment: text,
        }),
      });
      fetchProject();
      const data = await response.json();
      console.log(data);
      Swal.fire("Success", "Your comment has been sent", "success");
    }
  };

  return (
    <div className={styles.card} onClick={() => comment(props.project.id)}>
      {/* <img src="img_avatar.png" alt="Avatar" style="width:100%"> */}

      <div className={styles.container}>
        <h4>
          <b className={styles.description}>{props.project.name}</b>
        </h4>
        <p className={styles.description}>{props.project.description}</p>
      </div>
    </div>
  );
};

const style = createUseStyles({
  container: {
    padding: "2px 16px",
    backgroundColor: "white",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    position: "relative",
    top: 0,
    left: 0,
  },
  card: {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    backgroundColor: "white",
    flex: "1 0 30%",
    margin: "1rem",
    padding: "1rem",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    textAlign: "center",
  },
});

export default Card;
