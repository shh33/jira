import React from "react";
interface User {
  name: string;
  phone: number;
  id: number;
}
interface SearchBarProps {
  users: User[];
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: SearchBarProps["param"]) => void;
}
export const SearchBar = ({ param, users, setParam }: SearchBarProps) => {
  return (
    <div>
      <input
        type="text"
        value={param.name}
        onChange={(evt) =>
          setParam({
            ...param,
            name: evt.target.value,
          })
        }
      />
      <select
        name={param.personId}
        onChange={(evt) =>
          setParam({
            ...param,
            personId: evt.target.value,
          })
        }
      >
        <option value="">负责人</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
};
