import { atom } from "recoil";

export const usernameState = atom({
  key: "usernameState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export const passwordState = atom({
  key: "passwordState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
