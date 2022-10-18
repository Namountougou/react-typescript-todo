import { Box, Button, Tab, Tabs, TextField } from "@mui/material";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Active from "../../components/Active";
import All from "../../components/All";
import Finished from "../../components/Finished";
import { a11yProps } from "../../components/TabP/allyProps";
import TabPanel from "../../components/TabP/TabPanel";

export interface TodoForm {
  addTodo?: AddTodo;
}

const Main: React.FC<TodoForm> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");
  const [value, setValue] = useState(0);
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const tableChanger = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (newTodo !== "") {
      setTodos([...todos, { title: newTodo, id: Math.random() * 1000 }]);
      setNewTodo("");
    }
  };
  console.log(todos);

  return (
    <div>
      <Box
        sx={{
          width: "25%",
          minHeight: "600px",
          margin: "auto",
          marginTop: "8%",
          marginBottom: "",
          borderRadius: 1,
          boxShadow: " 0 0 30px 0 rgba(0,0,0,0.5)",
        }}
      >
        <Box
          sx={{
            width: "100%",
            paddingTop: "30px",
          }}
        >
          <form>
            <TextField
              id="outlined-basic"
              label="Add Todo"
              variant="outlined"
              sx={{
                width: "60%",
                height: "100%",
                borderRadius: 2,
                bgcolor: "",
                color: "black",
                marginRight: "20px",
                boxShadow: 10,
                fontSize: "20px",
                fontWeight: "bold",
              }}
              type="text"
              value={newTodo}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setNewTodo(e.target.value)
              }
            />
            <Button
              variant="contained"
              sx={{
                width: "20%",
                height: "55px",
                bgcolor: "blue",
                fontWeight: "bold",
                fontSize: "20px",
                boxShadow: 20,
              }}
              onClick={handleSubmit}
              type="submit"
            >
              Add
            </Button>
          </form>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              width: "100%",
              paddingTop: "10px",
            }}
          >
            <Tabs
              value={value}
              onChange={tableChanger}
              aria-label="basic tabs example"
            >
              <Tab
                key={"all"}
                label="All"
                {...a11yProps(0)}
                sx={{
                  width: "33%",
                  fontWeight: "bold",
                  color: "blue",
                }}
              />
              <Tab
                key={"active"}
                label="Active"
                {...a11yProps(1)}
                sx={{
                  width: "33%",
                  fontWeight: "bold",
                  color: "blue",
                  borderRadius: 4,
                }}
              />
              <Tab
                key={"termine"}
                label="Completed"
                {...a11yProps(2)}
                sx={{
                  width: "33%",
                  fontWeight: "bold",
                  color: "blue",
                }}
              />
            </Tabs>
          </Box>
          <Box
            sx={{
              maxHeight: "400px",
              overflowY: "scroll",
              overflowX: "hidden",
              width: "100%",
              "&::-webkit-scrollbar": {
                width: "0",
              },
            }}
          >
            <TabPanel value={value} index={0}>
              <All />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Active />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Finished />
            </TabPanel>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Main;
