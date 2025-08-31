import { useState } from 'react';
import css from './App.module.css';
import CafeInfo from "../CafeInfo/CafeInfo";
import { Votes, VoteType } from "../../types/votes";

export default function App() {
  // стан з голосами
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // обробка голосування
  const handleVote = (type: VoteType) => {
    setVotes(prevVotes => ({
      ...prevVotes,
      [type]: prevVotes[type] + 1,
    }));
  };

  // скидання голосів
  const resetVotes = () => {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  };


  
  
  return (
    <div className={css.app}>
      <CafeInfo />
    </div>
  );
}
