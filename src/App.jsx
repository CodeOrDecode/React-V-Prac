import Counter from "./component/Counter";
import { useState, useEffect } from "react";

function App() {
  let [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, [])
  

  let getData = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let finalData = await res.json();

    console.log(finalData);
  };

  return <></>;
}

export default App;
