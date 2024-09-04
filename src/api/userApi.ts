import { User } from "../types/User";
import { mockUsers } from "../constants";

const STORAGE_KEY = "@users";

export const getUsers = async (): Promise<User[]> => {
  const users = localStorage.getItem(STORAGE_KEY);

  return users ? JSON.parse(users) : mockUsers;
};

export const saveUser = async (user: User): Promise<User[]> => {
  const users = await getUsers();
  users.push(user);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));

  return users;
};

export const patchUser = async (updatedUser: User): Promise<User[]> => {
  const users = await getUsers();
  const updatedUsers = users.map((user) =>
    user.id === updatedUser.id ? updatedUser : user
  );

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedUsers));

  return updatedUsers;
};
