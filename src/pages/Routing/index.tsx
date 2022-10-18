import { useState } from "react";
import { Route, Routes } from "react-router";
import All from "../../components/All";
import Main from "../Layout";

const Routing = () => {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  return (
    <Routes>
      <Route element={<Main />}>
        <Route index element={<All />} />
      </Route>
    </Routes>
  );
};

export default Routing;
