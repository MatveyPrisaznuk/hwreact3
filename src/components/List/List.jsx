import { ListItem, ImageItem, Item, Title, NewListItem, Difficulty } from "./List.styled";
import { TfiAlarmClock } from "react-icons/tfi";
import { BiAlbum } from "react-icons/bi";
import { IoStatsChartSharp } from "react-icons/io5";

function List({ data }) {
  return (
    <ListItem>
      {data.map(
        ({ id, title, image, time, servings, calories, difficulty }) => {
          return (
            <Item key={id}>
              <ImageItem src={image} alt={title} />
              <Title>{title}</Title>
              <NewListItem>
                <li><TfiAlarmClock /> {time} min</li>
                <li><BiAlbum /> {servings} servings</li>
                <li><IoStatsChartSharp /> {calories} calories</li>
              </NewListItem>
              <Difficulty difficulty={difficulty}>Difficulty: {difficulty}</Difficulty>
            </Item>
          );
        },
      )}
    </ListItem>
  );
}

export default List;
