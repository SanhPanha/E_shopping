const API_URL = "https://store.istad.co/api/products/";
const BASE_URL = "https://store.istad.co";
const API_URL_CREATE = "https://store.istad.co/api/";
const API_URL_MYPRODUCT = "https://store.istad.co/api/products/my_products/";
const API_URL_LOGIN = "https://store.istad.co/api/user/login/";

type CategoryType = {
  name: string;
  icon: string;
};

type ProductType = {
  id: number;
  name: string;
  price: number;
  category?: CategoryType;
  desc: string;
  image: string;
  seller: string;
  onClick?: () => void;
  quantity: number;
};

type userProfile = {
  avatar: string;
  bio: string;
  created_at: string;
  updated_at: string;
};

const token =
"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE0OTA4MzQzLCJpYXQiOjE3MTQ5MDc5ODMsImp0aSI6ImQxMjE3MGIzMjIyYjRlOWE5MGM2NTYyZGMwYTU5ZTdhIiwidXNlcl9pZCI6Njh9.HY2xyUIP6ZGVomH0e52m9LzeON9Q-ZMtCnv07h3koGo";

const initialValues = {
  id : 0,
  categoryName: "",
  categoryIcon: "",
  name: "",
  desc: "",
  image: "",
  price: 0,
  quantity: 0,
  fileIcon: null,
  fileProduct: null,
};

export { token, initialValues, API_URL_CREATE, API_URL, API_URL_MYPRODUCT, API_URL_LOGIN };
export { BASE_URL };
export type { ProductType, CategoryType, userProfile};
// export { token };
