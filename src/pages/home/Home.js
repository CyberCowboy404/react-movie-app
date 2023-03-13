import { useState, useEffect } from "react";
import { observer } from "mobx-react";
import FilmsController from "./Home.ctrl";

function HomePage(...app) {
  console.log(`HomePage ~ app:`, app);
  const [controller] = useState(new FilmsController());

  useEffect(() => {
    // controller.getPublicBooks();
  }, [controller]);

  return (
    <article>
      <h1>Hello</h1>
    </article>
  );
}

export default observer(HomePage);
