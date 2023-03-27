import { useState, useRef } from "react";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { IconNotifications, IconSearch, IconBack } from "../styles/Icons";
import HeaderLayout from "../styles/HeaderLayout";
import useUsers from "../hooks/useUsers";
import { Users } from "../protocols";

interface IHeaderProps {
  showArrow: boolean;
}

export default function Header({ showArrow }: IHeaderProps) {
  const navigate = useNavigate();
  return (
    <HeaderLayout>
      {showArrow ? <IconBack onClick={() => navigate("/")} /> : <></>}
      <Search />
      <IconNotifications />
    </HeaderLayout>
  );
}

function Search() {
  const [valueInput, setValueInput] = useState<string>("");
  const { users } = useUsers(valueInput.toLowerCase());
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  return (
    <ContainerSearch>
      <IconSearch onClick={() => ref.current?.focus()} />
      <input
        type=" search"
        placeholder="Search user"
        value={valueInput}
        name="search"
        ref={ref}
        onChange={(e) => setValueInput(e.target.value)}
      />
      <UsersLayout>
        {users?.map((e: Users) => (
          <span onClick={() => navigate(`/profile/${e.id}`)} key={e.id}>
            {e.name}
          </span>
        ))}
      </UsersLayout>
    </ContainerSearch>
  );
}

const ContainerSearch = styled.div`
  position: relative;
`;

const UsersLayout = styled.div`
  display: flex;
  position: absolute;
  background-color: #e0e0e0;
  top: 40px;
  flex-direction: column;
  width: 100%;
  z-index: 2;
  span {
    padding: 10px;
    cursor: pointer;
  }
`;
