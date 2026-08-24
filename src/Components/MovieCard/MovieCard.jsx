import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { BsPlusCircle } from "react-icons/bs";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import styles from "./MovieCard.module.css";

const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";


function MovieCard({ movie }) {
  let generes = ["Adventure", "Action", "Thriller"];

  return (
    <div className={styles.cardWrapper}>
      {/* poster image */}
      <img
        className={styles.poster}
        src={`${IMAGE_BASE}${movie?.poster_path}`}
        alt="poster image"
      />

      {/* hover card */}
      <div className={styles.hoverCard}>
        {/* image */}
        <img
          className={styles.hoverImage}
          src={`${IMAGE_BASE}${movie?.poster_path}`}
          alt="hover image"
        />
        {/* badge */}
        <div className={styles.badge}>Recently added</div>
        {/* button row*/}
        <div className={styles.buttonsRow}>
          <FaCirclePlay
            size={40}
            color="white"
            className={styles.circleButton}
          />
          <BsPlusCircle
            size={40}
            color="white"
            className={styles.circleButton}
          />
          <GoCheckCircleFill
            size={40}
            color="white"
            className={styles.circleButton}
          />
          <IoIosArrowDropdownCircle
            size={40}
            color="white"
            className={styles.circleButtonSmall}
          />
        </div>
        {/* meta data row*/}
        <div className={styles.metaRow}>
          <span className={styles.tag}>U/A 16+</span>

          <span className={styles.tag}>Movie</span>

          <span className={styles.tag}>HD</span>
        </div>
        {/* genere */}
        <div className={styles.generes}>
          {generes?.map((g, index) => {
            return (
              <span key={index}>
                {g}
                {index < generes.length - 1 && (
                  <span className={styles.dot}> • </span>
                )}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
