import { Layout } from "../../components/Layout";
import { useState, useEffect } from "react";
import { ENGLISH_WORDS } from "../../misc/hangmanimages/words";

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
      <h1>Hangman</h1>
      <h1>{answer}</h1>
    </Layout>
  );
};

export default Hangman;
