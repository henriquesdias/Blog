import { useState, useEffect } from "react";

import getInformationsOfUser from "../api/getInformationsOfUser";
import { Users } from "../protocols";

export default function useInformationsUser(userId: number) {
  const [info, setInfo] = useState<null | Users>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    getInformationsOfUser(userId)
      .catch((res) => {
        console.log(res);
        setError(res);
      })
      .then((res) => setInfo(res));
  }, []);

  return { info, error };
}
