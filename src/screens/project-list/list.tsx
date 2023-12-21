import React from "react";

interface Project {
  name: string;
  personId: number;
  id: number;
}
interface User {
  name: string;
  phone: number;
  id: number;
}
interface listProps {
  list: Project[];
  users: User[];
}
export const TableList = ({ users, list }: listProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{users.find((user) => user.id === item.personId)?.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
