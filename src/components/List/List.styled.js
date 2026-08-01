import styled from "styled-components";

export const ListItem = styled.ul`
  display: flex;
  gap: 50px;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  background-color: #ffffe0e2;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Title = styled.h2`
  color: black;
  font-size: 20px;
`;

export const ImageItem = styled.img`
  width: 250px;
  height: 250px;
  display: block;
  border-radius: 20px;
`;

export const NewListItem = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  background-color: white;
  border-radius: 25px;
  gap: 10px;
  width: 340px;
  height: 50px;
`;
export const Difficulty = styled.p`
  background-color: ${({ difficulty }) => {
    if (difficulty === "Hard") return "#e93e0f5b";
    if (difficulty === "Medium") return "#e9bd0f5b";
    return "#0fe9165b";
  }};
  border-radius: 25px;
  height: 50px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;
