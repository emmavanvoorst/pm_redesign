import React, { useState } from "react";
import { styled } from "styled-components";

const Container = styled.div`
  background-color: #f5c6c6;
  height: 100vw;
  display: flex;
  padding-top: 4em;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.div`
  font-family: "Lilita One", sans-serif;
  font-size: 20rem;
  color: #50c878;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const FilterOption = styled.div`
  font-family: "Lilita One", sans-serif;
  font-size: 5rem;
  margin: 0.5em;
  transition: 500ms;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: #b93be2;
  }
  ${({ isActive }) =>
    isActive &&
    "text-decoration: underline; font-family: 'Charm', cursive;"}
`;
const Blog = () => {
  const [active, setActive] = useState("All");

  return (
    <Container>
      <Title>BLOG</Title>
      <FilterContainer>
        <FilterOption
          isActive={active === "All"}
          onClick={() => setActive("All")}
        >
          All
        </FilterOption>
        <FilterOption
          isActive={active === "Music"}
          onClick={() => setActive("Music")}
        >
          Music
        </FilterOption>
        <FilterOption
          isActive={active === "Articles"}
          onClick={() => setActive("Articles")}
        >
          Articles
        </FilterOption>
      </FilterContainer>
    </Container>
  );
};

export default Blog;
