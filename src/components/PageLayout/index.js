import React from "react";
import { createUseStyles } from "react-jss";
import { NavBar, Profile } from "../../components";
import background from "../../aset/bg.jpg";

export const PageLayout = (props) => {
  const styles = style();
  return (
    <React.Fragment>
      <div className={styles.container}>
        <NavBar />
        <Profile />
      </div>
      {props.children}
    </React.Fragment>
  );
};

const style = createUseStyles({
  container: {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    flex: 1,
    position: "relative",
    top: 0,
    left: 0,
  },
});

export default PageLayout;
