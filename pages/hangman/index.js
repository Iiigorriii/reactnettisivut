import { Layout } from "../../components/Layout";
import { useState, useEffect } from "react";
import { ENGLISH_WORDS } from "../../misc/hangmanimages/words";

const letters = /^[a-z0-9]+$/i;

const Hangman = () => {
  const [answer, setAnswer] = useState("");
  const randomWord = () => {
    setAnswer(ENGLISH_WORDS[Math.floor(Math.random() * ENGLISH_WORDS.length)]);
  };

  useEffect(() => {
    randomWord();
  }, []);

  return (
    <Layout>
      <h1>Hangman game tulossa joskus:)</h1>
      <br />
      <img src="/hangman/hangman.jpg" alt="hangman" />
    </Layout>
  );
};

export default Hangman;
