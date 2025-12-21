"use client";
import { useState, useEffect } from "react";
import Quote from "./Quote";
import Loader from "./Loader";
import styles from "@/styles/BBApp.module.css";
import Image from "next/image";

const initialQuote = {
  text: "",
  author: "",
};

const BBApp = () => {
  const [quote, setQuote] = useState(initialQuote);

  const [isLoading, setIsLoading] = useState(false);

  const updateQuote = async () => {
    try {
      setIsLoading(true);
  
      const res = await fetch(
        "https://api.breakingbadquotes.xyz/v1/quotes",
        { cache: "no-store" }
      );
  
      if (!res.ok) throw new Error("Error de red");
  
      const [newQuote] = await res.json();
      const { quote: text, author } = newQuote;
  
      setQuote({ text, author });
  
    } catch (error) {
      console.error("Error al obtener la cita:", error);
      setQuote({
        text: "No se puede obtener la cita. La API está caída",
        author: "Error",
      });
    } finally {
      setTimeout(() => setIsLoading(false), 1500);
    }
  };

  useEffect(() => {
    updateQuote();
  }, []);

  return (
    <div className={styles["container"]}>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/1024px-Breaking_Bad_logo.svg.png"
        alt="breaking-bad"
        width={170}
        height={90}
        priority
      />

      {isLoading ? <Loader /> : <Quote quote={quote} />}

      <button className={styles["button"]} onClick={updateQuote}>
        Obtener otra cita
      </button>
    </div>
  );
};

export default BBApp;
