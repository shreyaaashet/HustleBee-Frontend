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
       
        <p
          style={{
            fontSize:16,
            color: "#2667FF",
            textAlign: "center",
            textTransform:"uppercase",
            fontWeight:"700",
            letterSpacing:"1.4px"
          }}
        >
          Jobs based on your desired category
        </p>
        <h1 style={{ textAlign: "center" }}>Choose Your Desired Category</h1>
        <CategoriesWrapper id="categories">
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
