import React, { FormEvent } from "react";

const apiUrl = process.env.REACT_APP_URL;

export default function LoginScreen() {
  const login = (param: { username: string; password: string }) => {
    fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(param),
    }).then(async (res) => {
      if (res.ok) {
        console.log("res: ", res);
      }
    });
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement> | undefined) => {
    event?.preventDefault();
    const username = (event?.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event?.currentTarget.elements[1] as HTMLInputElement)
      .value;
    login({
      username,
      password,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">用户名</label>
      <input type="text" />
      <label htmlFor="password">密码</label>
      <input type="password" />
      <button type={"submit"}>提交</button>
    </form>
  );
}
