import { useParams, useNavigate } from "react-router-dom";

import profileImage from "../assets/profile.jpeg";
import useInformationsUser from "../hooks/useInformationsUser";
import ProfileLayout from "../styles/ProfileLayout";

export default function Profile() {
  const { userId } = useParams();
  const { info, error } = useInformationsUser(Number(userId));
  const navigate = useNavigate();
  return (
    <ProfileLayout>
      <div>
        <img src={profileImage} alt="profile" />
      </div>
      <div>
        <span>Name: {info?.name}</span>
        <span>E-mail: {info?.email}</span>
        <span>Username: {info?.username}</span>
        <span>Phone: {info?.phone}</span>
        <span>Website: {info?.website}</span>
      </div>
      <button onClick={() => navigate("/")}>Back home</button>
    </ProfileLayout>
  );
}
