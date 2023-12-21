import React from "react";
export const SearchBar = ({ param, users, setParam }) => {
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
