import axios from "axios";
import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import * as NewsService from "../../api/serp-api/fetchData";
const News = () => {
  useEffect(() => {
    const firstCall = async () => {
      const res = await fetchNewsData();
      console.log(res);
    };
    firstCall();
  }, []);
  const fetchNewsData = async () => {
    const res = await axios(
      "https://serpapi.com/search.json?q=Trump&tbm=nws&location=Dallas&api_key=de3741f14d58f96507b5fb7dbdda52445b1d449b3895b99610bbb6f53d667530"
    );
    return res.data;
  };
  return (
    <>
      <div style={{ display: "flex" }}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default News;
