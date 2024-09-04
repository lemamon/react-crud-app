import { FC, createContext, useState, useEffect } from "react";
import { User } from "../types/User";
import { getUsers, saveUser, patchUser } from "../api/userApi";

interface UserContextData {
  users: User[];
  addUser: (user: User) => void;
  updateUser: (user: User) => void;
}

export const UserContext = createContext<UserContextData | undefined>(
  undefined
);

export const UserProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [users, setUsers] = useState<User[]>([]);

  const loadUsers = async () => {
    const users = await getUsers();
    setUsers(users);
  };

  const addUser = async (user: User) => {
    const updatedUsers = await saveUser(user);
    setUsers(updatedUsers);
  };

  const updateUser = async (updatedUser: User) => {
    const updatedUsers = await patchUser(updatedUser);
    setUsers(updatedUsers);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <UserContext.Provider value={{ users, addUser, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
