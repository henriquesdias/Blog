import HeaderLayout from "../styles/HeaderLayout";
import { IconNotifications, IconSearch } from "../styles/Icons";

export default function Header() {
  return (
    <HeaderLayout>
      <div>
        <IconSearch />
        <input type=" search" placeholder="Search..." />
      </div>
      <IconNotifications />
    </HeaderLayout>
  );
}
