import React from "react";
import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import * as C from "./styles";
import { Link } from "react-router-dom";
import api from "../../api";
import { RatingC } from "../../components/RatingC";
import { Comment } from "../../components/Comment";
import Rating from "@mui/material/Rating";
import { FacebookShareButton, FacebookIcon } from "react-share";
export const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [ratings, setRelatings] = useState([]);
  const [comments, setComments] = useState([]);
  const [path, setPath] = useState("");
  const [showComments, setShowComments] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    const singlePost = async () => {
      let json = await api.getSinglePost(id);

      if (json.error !== "") {
        console(json.error);
      } else {
        setPost(json.post);
        setValue(json.ratings);
        setComments(json.comments);
        setPath(json.path);
      }
    };
    singlePost();

    const ratings = async () => {
      let json = await api.getRatingPosts(id);

      if (json.error !== "") {
        console(json.error);
      } else {
        setRelatings(json.post);
      }
    };
    ratings();
  }, [id, showComments]);

  const handleRatings = async (v) => {
    setValue(v);
    let json = await api.setNewValue(v, id);
  };

  const shareUrl = "refresher.com.br";

  return (
    <>
      <C.Container>
        <div className="breadcrumb">
          <span>
            <Link to="/">Home</Link> <span>post/{id}</span>
          </span>
        </div>
        <img className="imgRes" src={`${path}/${post.imagem}`} />
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <div className="createBy">
          <h3>
            Criado por: {post.author}
            <br />
            <br />
            <FacebookShareButton url={shareUrl} quote={post.title}>
              <FacebookIcon size={20} round={true} />
            </FacebookShareButton>
          </h3>

          <p>
            Data: {post.date}
            <br />
            <Rating
              precision={0.5}
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => handleRatings(newValue)}
            />
          </p>
        </div>
        <Comment
          comments={comments}
          id={post.id}
          setShowComments={setShowComments}
        />
      </C.Container>
      <C.Related>
        <h2 className="adjust">Posts relacionados</h2>
        <RatingC ratings={ratings} path={path} />
      </C.Related>
    </>
  );
};
