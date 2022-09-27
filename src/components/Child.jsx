import { useEffect, useState } from "react";

function Child() {
  const [data, setData] = useState([]);
  const controller = new AbortController();
  const clickHandler = () => {
    fetch("https://fakestoreapi.com/products", {
      signal: controller.signal
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        return setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log("UseEffect Stated");

    setTimeout(() => clickHandler(), 5000);

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <button onClick={() => clickHandler()}>Get Data</button>

      {data?.map((el) => (
        <div key={el.id}>
          <p>{el.title}</p>
        </div>
      ))}
    </>
  );
}

export default Child;
