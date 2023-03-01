import { Box } from "@mui/material";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import {useState} from 'react';
import DeleteIcon from "@mui/icons-material/Delete";



const Content = () => {
  const [todos, setTodos] = useState([
    { id: 1, description: "Make Coffee", checked: "" },
    { id: 2, description: "Develop Website", checked: "" },
    { id: 3, description: "Learn React Native", checked: "" },
  ]);
  const handleCheck = (id) => {
    const listItems = todos.map((todo) => todo.id === id ? {...todo, checked: !todo.checked} : todo)
    setTodos(listItems)
    console.log(listItems)
  }

  const handleDelete = (id) => {
    const listItems = todos.filter((todo) => todo.id !== id)
    setTodos(listItems)
  }
  return (
    <Box>
      <List>
        {todos.map((todo) => (
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon role="button" onClick={() => handleDelete(todo.id)}/>
              </IconButton>
            }
          >
            <Checkbox checked={todo.checked} onChange={() => handleCheck(todo.id)} />
            <ListItemText primary={todo.description} onDoubleClick={() => handleCheck(todo.id)} style={(todo.checked)? {textDecoration:'line-through'} : null} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Content;
