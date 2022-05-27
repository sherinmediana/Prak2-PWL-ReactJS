import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import _ from "lodash";
import { Card, PageLayout } from "../../components";

export const Porto = () => {
  const styles = style();
  const [project, setProject] = useState({
    projects: "",
  });
  const fetchProjects = async () => {
    const response = await fetch("https://server-sherinmediana.herokuapp.com/api/projects");
    setProject({
      projects: await response.json(),
    });
  };

  useEffect(() => {
    fetchProjects();
  }, []);
  return (
    <PageLayout>
      <div>
        <h2 className={styles.header}>Projects</h2>
        <div className={styles.project}>
          {_.map(project.projects.projects, (project) => {
            return <Card project={project} />;
          })}
        </div>
      </div>
    </PageLayout>
  );
};

const style = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    flex: 1,
    position: "relative",
    top: 0,
    left: 0,
    zIndex: -1,
    width: "100%",
  },
  project: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    flex: 1,
    position: "relative",
    top: 0,
    left: 0,
    width: "100%",
    flexWrap: "wrap",
  },
  header: {
    textAlign: "center",
  },
});

export default Porto;
