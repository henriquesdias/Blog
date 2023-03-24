export type PostType = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export type CommentType = {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
};

export type Users = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};
