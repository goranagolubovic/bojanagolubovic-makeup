import React from "react";
import styles from "../style/style.css";

const ScrollView = () => {
  return (
    <div
      className={`scroll-view ${styles.scrollView} relative left-2 transform translate-x-full`}
    ></div>
  );
};

export default ScrollView;
