import React from "react";
import {
  Box,
  Card,
  Cards,
  CategoriesWrapper,
  Content,
  Icon,
} from "./CategoriesElements";
import { categoriesData } from "./data";

const Categories = () => {
  return (
    <>
      <Box>
        <h1 style={{ textAlign: "center" }}>Choose Your Desired Category</h1>
        <p
          style={{
            fontSize: 19,
            color: "rgba(0,0,0,0.7)",
            textAlign: "center",
          }}
        >
          Jobs based on your desired category
        </p>
        <CategoriesWrapper>
          <Cards>
            {categoriesData &&
              categoriesData.categories.map((i) => {
                return (
                  <Card key={i.title}>
                    <Icon src={i.img} alt={i.title} />
                    <h2>{i.title}</h2>
                    <Content>{i.subtitle}</Content>
                  </Card>
                );
              })}
          </Cards>
        </CategoriesWrapper>
      </Box>
    </>
  );
};

export default Categories;
