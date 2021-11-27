import React from "react";
import Img from "../public/images/home.jpg";
import Image from "next/image";
import styles from "./p1.module.css";
import Moon from './moon';

const P1 = () => {
  
  return (
    <div className={styles.container}>
      <div className={styles.mainImage}>
          <Moon />
        <div className={styles.mainImageCover}>
          <Image src={Img} layout="fill" alt=" " />
        </div>
      </div>
    </div>
  );
};

export default P1;
