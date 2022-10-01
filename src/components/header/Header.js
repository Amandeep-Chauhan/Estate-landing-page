import {
  TextField,
  createTheme,
  ThemeProvider,
  MenuItem,
} from "@material-ui/core";
import React from "react";
import categories from "../category/category";
import "./header.css";
function Header({ word, setWord, category, setCategory }) {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  const handleChange = (e) => {
    setCategory(e);
    setWord("");
  };

  return (
    <div className="header">
      <header className="title">{word ? word : "Word hunt"}</header>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            label="search here"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <TextField
            id="outlined-select-currency"
            className="select"
            select
            label="language"
            value={category}
            onChange={(e) => handleChange(e.target.value)}
          >
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Header;
// 53
