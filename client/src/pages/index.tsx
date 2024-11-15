import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Dino } from "../types.ts";

export default function Index() {
    const [data, setData] = useState();

  useEffect(() => {
    (async () => {
        const response = await fetch(`/server/hello`);
        const hello = await response.json()
        console.log(hello)
      setData(hello)
    })();
  }, []);

  return (
    <main>
      {JSON.stringify(data)}
    </main>
  );
}
