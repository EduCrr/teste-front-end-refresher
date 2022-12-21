import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as C from "./styles";
import api from "../../api";
export const Comment = ({ comments, id, setShowComments }) => {
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [errorLv, setErrorLv] = useState([]);

  const handleComment = async (e) => {
    e.preventDefault();
    setError("");

    let errors = [];
    if (!content.trim()) {
      errors.push("Campo obrigatório!");
    }

    if (errors.length === 0) {
      const json = await api.addComentary(content, id);
      if (json.error === "") {
        setError("");
        setShowComments(true);
        alert("cadastrado com sucesso!");
        setContent("");
        setShowComments(false);
        return;
      } else {
        setErrorLv(json.error);
        return;
      }
    } else {
      setError(errors.join("\n"));
    }
  };
  return (
    <C.Container>
      <h2>Comentários</h2>
      <br />
      {error && error}
      {comments.map((item, k) => (
        <div className="comments" key={k}>
          <img
            src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png"
            alt="user"
          />
          <h5>Visitante</h5>
          <p>{item.content} </p>
        </div>
      ))}

      <form onSubmit={handleComment}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          cols="60"
          rows="5"
          placeholder="Escreva seu cometário"
        />
        <button type="submit">Enviar</button>
      </form>
    </C.Container>
  );
};
