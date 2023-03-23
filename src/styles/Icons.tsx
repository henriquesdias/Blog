import styled from "styled-components";

import {
  IoSearchOutline,
  IoNotificationsOutline,
  IoArrowBackOutline,
} from "react-icons/io5";

const IconNotifications = styled(IoNotificationsOutline)`
  font-size: 24px;
`;

const IconSearch = styled(IoSearchOutline)`
  font-size: 24px;
  margin-left: 10px;
`;

const IconBack = styled(IoArrowBackOutline)`
  font-size: 24px;
`;

export { IconNotifications, IconSearch, IconBack };
