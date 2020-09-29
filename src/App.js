import React, { useState } from "react";
import "./styles.css";
import ContainerLayout from "./components/ContainerLayout";
import Background from "./components/Background";
import TextInput from "./components/TextInput";
import SearchBar from "./components/Search";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState("");

  return (
    <div className="App">
      <ContainerLayout title="This is title">this content</ContainerLayout>

      <TextInput
        inputValue={inputValue}
        setInputValue={setInputValue}
      ></TextInput>
      <Background> {inputValue}</Background>
      <div>........................</div>
      <SearchBar count={count} setCount={setCount}></SearchBar>
    </div>
  );
}
