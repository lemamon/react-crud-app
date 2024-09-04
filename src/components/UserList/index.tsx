import { FC } from "react";
import { ListContainer, UserItem, FloatingButton } from "./styles";
import { useUserContext } from "../../hooks/useUserContext";
import { useNavigate } from "react-router-dom";

const UserList: FC = () => {
  const { users } = useUserContext();
  const navigate = useNavigate();

  return (
    <ListContainer>
      <h1>Users</h1>
      {users.map((user) => (
        <UserItem key={user.id}>
          <span>{user.name}</span>
          <button onClick={() => navigate(`/users/${user.id}`)}>✏️</button>
        </UserItem>
      ))}
      <FloatingButton onClick={() => navigate("/users")}>+</FloatingButton>
    </ListContainer>
  );
};

export default UserList;
