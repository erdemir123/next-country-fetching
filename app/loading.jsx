import React from "react";
import Styles from "./loading.module.css";

const loading = () => {
  return (
    <div className="flex w-full justify-center items-center">
        <div>
        <div class={Styles.spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
        </div>
      
    </div>
  );
};

export default loading;
