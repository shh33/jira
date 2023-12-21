import React from "react";
import * as qs from "qs";
import { cleanObject, useDebounce, useMount } from "../../utils";
import { TableList } from "./list";
import { SearchBar } from "./search-bar";
import { useEffect, useState } from "react";
const apiUrl = process.env.REACT_APP_URL;
export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const debounceParam = useDebounce(param, 1000);

  useEffect(() => {
    fetch(
      `${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`
    ).then(async (res) => {
      if (res.ok) {
        setList(await res.json());
      }
    });
  }, [debounceParam]);

  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (res) => {
      if (res.ok) {
        setUsers(await res.json());
      }
    });
  });

  return (
    <div>
      <SearchBar param={param} users={users} setParam={setParam} />
      <TableList users={users} list={list} />
    </div>
  );
};
