import React, { useState } from "react";
import axios from "axios";
import { Button, Card, Table } from "react-bootstrap";
import { FlexContainer } from "../../components/Common";
import Input from "../../components/Input";

const Home = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const getResult = async () => {
    const result = await axios.get(
      `https://codeeeee.herokuapp.com/search?q=${search}`
    );
    setData(result.data);
  };

  return (
    <>
      <FlexContainer width="100%" height="40vh" justify="center" align="center">
        <Input
          id="input"
          inputType="search"
          type="text"
          label="Search"
          placeholder="Enter Text..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <FlexContainer height="1vh">
          <Button
            onClick={() => {
              getResult();
            }}
          >
            Search
          </Button>
        </FlexContainer>
      </FlexContainer>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card>
          {data.length ? (
            data.map((el) => {
              return (
                <div style={{ display: "flex" }}>
                  <Card.Img
                    style={{ width: "200px" }}
                    variant="top"
                    src={el.thumbnail}
                  />
                  <Card.Body>
                    <Card.Title>{el.title}</Card.Title>
                    <Card.Text>{el.snippet}</Card.Text>
                    <Button variant="primary" href={el.link}>
                      Read more here
                    </Button>
                  </Card.Body>
                </div>
              );
            })
          ) : (
            <></>
          )}
        </Card>
      </div>
    </>
  );
};

export default Home;
