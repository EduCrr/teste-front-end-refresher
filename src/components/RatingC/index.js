import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as C from "../Posts/styles";

export const RatingC = ({ ratings, path }) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <C.Container>
      <div className="container">
        {ratings.map((item, k) => (
          <div className="postSingle" key={k}>
            <img src={`${path}/${item.imagem}`} />
            <h3>{item.title}</h3>
            <p>{item.content}</p>
            <Link onClick={() => handleClick()} to={`/post/${item.id}`}>
              Ver mais
            </Link>
          </div>
        ))}
      </div>
    </C.Container>
  );
};
