import { Box, Button, TextField, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import FormGroup from "@mui/material/FormGroup";
import SearchIcon from '@mui/icons-material/Search';

const Content = () => {
  const [todos, setTodos] = useState([
    { id: 1, description: "Make Coffee", checked: "" },
    { id: 2, description: "Develop Website", checked: "" },
    { id: 3, description: "Learn React Native", checked: "" },
  ]);
  const [newItem, setNewItem] = useState("");
  const [searchItem, setSearchItem] = useState("");
  const handleCheck = (id) => {
    const listItems = todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(listItems);
    localStorage.setItem("Todo List", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = todos.filter((todo) => todo.id !== id);
    setTodos(listItems);
    localStorage.setItem("Todo List", JSON.stringify(listItems));
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };
  const addItem = (todo) => {
    const id = todos.length ? todos[todos.length - 1].id + 1 : 1;
    const myNewItem = { id: id, description:todo, checked: "" };
    const listItems = [...todos, myNewItem];
    setTodos(listItems);
    localStorage.setItem("Todo List", JSON.stringify(listItems));
  };

  const handleSearch = (e) => {
    setSearchItem(e.target.value)
    setTodos(todos.filter((todo) => todo.description.toLowerCase().includes(e.target.value.toLowerCase())))
  }

  return (
    <Box>
      <form onSubmit={handleAddSubmit}>
        <FormGroup
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            my: 2,
            ml: 2,
          }}
        >
          <TextField
            label="Add Item"
            variant="outlined"
            sx={{ width: { xs: "85%", md: "93%" }, mr: 1 }}
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <Button type="submit" variant="outlined" color="success" sx={{ py: 1.25 }}>
            <AddIcon fontSize="large" color="success" />
          </Button>
        </FormGroup>
        </form>
        <FormGroup
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            my: 2,
            ml: 2,
          }}
        >
          <TextField
            label="Search Item"
            variant="outlined"
            sx={{ width:"100%",mr:3 }}
            value={searchItem}
            onChange={handleSearch}
          />
        </FormGroup>
      {todos.length ? (
        <List>
          {todos.map((todo) => (
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon
                    role="button"
                    onClick={() => handleDelete(todo.id)}
                  />
                </IconButton>
              }
            >
              <Checkbox
                checked={todo.checked}
                onChange={() => handleCheck(todo.id)}
              />
              <ListItemText
                primary={todo.description}
                onDoubleClick={() => handleCheck(todo.id)}
                style={todo.checked ? { textDecoration: "line-through" } : null}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography textAlign="center" sx={{ my: 4 }}>
          The List is Empty
        </Typography>
      )}
    </Box>
  );
};

export default Content;
