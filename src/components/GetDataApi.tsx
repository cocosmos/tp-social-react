import { useState } from "react";
interface User {
  name: string;
  email: string;
  password: string;
}
export const GetDataApi = () => {
  const [dataUser, setDataUser] = useState<User>();
  setDataUser({ name: "jack", email: "reee", password: "password" });
  return dataUser;
};
