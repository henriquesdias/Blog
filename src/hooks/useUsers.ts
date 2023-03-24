import { useEffect, useState } from "react";

import getUsers from "../api/getUsers";
import { Users } from "../protocols";

export default function useUsers(name: string) {
  const [users, setUsers] = useState<null | Users[]>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (name.length >= 1) {
      getUsers()
        .catch((res) => {
          console.log(res.data);
          setError(res.data);
        })
        .then((res) => {
          setUsers(
            res.filter((e: Users) => e.name.toLowerCase().startsWith(name))
          );
        });
    }
    if (name.length === 0) {
      setUsers([]);
    }
  }, [name.length]);

  return { users, error };
}
