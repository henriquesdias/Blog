import { useNavigate } from "react-router-dom";
import HeaderLayout from "../styles/HeaderLayout";
import { IconNotifications, IconSearch, IconBack } from "../styles/Icons";

interface IHeaderProps {
  showArrow: boolean;
}

export default function Header({ showArrow }: IHeaderProps) {
  const navigate = useNavigate();
  return (
    <HeaderLayout>
      {showArrow ? <IconBack onClick={() => navigate("/")} /> : <></>}
      <div>
        <IconSearch />
        <input type=" search" placeholder="Search..." />
      </div>
      <IconNotifications />
    </HeaderLayout>
  );
}
