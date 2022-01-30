import React from "react"
// components
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { MemeContainer } from "./components/MemeContainer";
// css
import "./styles.css";

export default function App() {
  const [img, setImg] = React.useState(undefined);
  const [topText, setTopText] = React.useState("");
  const [bottomText, setBottomText] = React.useState("");

  return (
    <div className="App">
      <Header />
      <Form
        topText={topText}
        setTopText={setTopText}
        bottomText={bottomText}
        setBottomText={setBottomText}
        img={img}
      />
      <MemeContainer
        img={img}
        setImg={setImg}
        topText={topText}
        bottomText={bottomText}
      />
    </div>
  );
}
