import React, { useState, useEffect } from "react";

import api from "../../services/api";

import "./styles.css";

import logoImg from "../../assets/logo.png";

export default function Example() {
  const [example, setExample] = useState("");

  useEffect(() => {
    api.get("").then((response) => {
      setExample(response.data);
    });
  });

  return (
    <div className="example-container">
      <section className="example">
        <img src={logoImg} alt="Example" />

        <h1>{example}</h1>
      </section>
    </div>
  );
}
