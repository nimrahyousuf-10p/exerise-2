import React from "react";
import { FlexContainer } from "../../components/Common";
import Input from "../../components/Input";

const Home = () => {
  return (
    <FlexContainer width="100%" height="90vh" justify="center" align="center">
      <Input
        id="input"
        inputType="search"
        type="text"
        label="Search"
        placeholder="Enter Text..."
      />
    </FlexContainer>
  );
};

export default Home;
