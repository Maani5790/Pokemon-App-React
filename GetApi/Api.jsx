import React, { useEffect, useState } from "react";
import axios from "axios";

const Api = () => {
  const [num, setNum] = useState();
  const [name, setName] = useState();
  const [moves, setMoves] = useState();
  const [url, setUrl] = useState();
  const [game_index, setGame_index] = useState();

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      console.log(res);
      setName(res.data.name);
      setMoves(res.data.moves.length);
      setUrl(res.url);
      setGame_index(res.setGame_index);

    }
    getData();
  });

  return (
    <>
      <h1>You Choose <span style={{color:"red"}}></span>{num} value </h1>
      <h1>My name is <span style={{color:"red"}}></span>{name} value </h1>
      <h1>I have <span style={{color:"red"}}></span>{moves} moves </h1>
      <h1>I have <span style={{color:"red"}}></span>{game_index} moves </h1>
      <h1>The Url Is <span style={{color:"red"}}></span>{url} url </h1>
      
      <select
        value={num}
        onChange={(event) => {
          setNum(event.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="30">3</option>
        <option value="132">132</option>
        <option value="156">149</option>
        <option value="190">190</option>
        <option value="230">210</option>
      </select>
    </>
  );
};

export default Api;
