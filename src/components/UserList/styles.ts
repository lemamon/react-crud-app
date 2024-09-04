import styled from "styled-components";

export const ListContainer = styled.div`
  padding: 16px;
`;

export const UserItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

export const FloatingButton = styled.button`
  position: fixed;
  bottom: 16px;
  right: 16px;
  background-color: #1976d2;
  color: white;
  border: none;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  font-size: 24px;
  cursor: pointer;
`;
