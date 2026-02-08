import { useState } from "react";
import Counter from './Counter';
import LikeButton from "./LikeButton";
import './App.css';

function App() {
  const [count, setCount] = useState(0)

    return (
    <div>
      <h1>React-2</h1>
      <Counter />
      <LikeButton />
    </div>
  );
}

export default App
