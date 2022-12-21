import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as C from "./styles";
import api from "../../api";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [path, setPath] = useState("");

  useEffect(() => {
    const getPosts = async () => {
      let json = await api.getHomeList();
      if (json.error !== "") {
        console(json.error);
      } else {
        setPosts(json.posts);
        setPath(json.path);
      }
    };

    getPosts();
  }, []);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <C.Container>
      <div className="container">
        {posts.map((item, k) => (
          <div key={k} className="postSingle">
            <img src={`${path}/${item.imagem}`} />
            <h3>{item.title}</h3>
            <p>{item.content}</p>
            <Link onClick={() => handleClick()} to={`post/${item.id}`}>
              Ver mais
            </Link>
          </div>
        ))}
      </div>
    </C.Container>
  );
};
