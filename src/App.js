import axios from "axios";
import { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import Header from "./components/header/Header";
import Definition from "./components/Definitions/Definition";
import Child from "./child";
// import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  // const [word, setWord] = useState("");
  // const [meanings, setMeanings] = useState([]);
  // const [category, setCategory] = useState("en");

  // useEffect(() => {
  //   disctionaryApi();
  // }, [word, category]);

  // const disctionaryApi = async () => {
  //   try {
  //     const data = await axios
  //       .get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`)
  //       .then((res) => res.data);
  //     setMeanings(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    // <div
    //   className="App"
    //   style={{ height: "100vh", backgroundColor: "#282c34", color: "#fff" }}
    // >
    //   <Container
    //     maxWidth="md"
    //     style={{ display: "flex", flexDirection: "column", height: "100vh" }}
    //   >
    //     <Header
    //       word={word}
    //       setWord={setWord}
    //       category={category}
    //       setCategory={setCategory}
    //     />

    //     {meanings && (
    //       <Definition word={word} category={category} meanings={meanings} />
    //     )}
    //   </Container>
    // </div>

    //create a counter
    <div className="App">
      {/* <p>{counter}</p> */}
      <Child>{counter > 0 ? counter : "0"}</Child>
      <button onClick={() => setCounter(counter > 24 ? 25 : counter + 1)}>
        increment
      </button>
      <button onClick={() => setCounter(counter < 1 ? null : counter - 1)}>
        decrement
      </button>
    </div>
  );
}

export default App;
