import { useNavigate } from "react-router-dom";
import HeaderLayout from "../styles/HeaderLayout";
import { IconNotifications, IconSearch, IconBack } from "../styles/Icons";

import useUsers from "../hooks/useUsers";
import styled from "styled-components";
import { useState } from "react";
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

  return (
    <ContainerSearch>
      <IconSearch />
      <input
        type=" search"
        placeholder="Search user"
        value={valueInput}
        name="search"
        onChange={(e) => setValueInput(e.target.value)}
      />
      <UsersLayout>
        {users?.map((e: Users) => (
          <span key={e.id}>{e.name}</span>
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
  span {
    padding: 5px;
  }
`;
