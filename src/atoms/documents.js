import { atom } from "recoil";

export const documentsState = atom({
  key: "documentsState", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export const singledocumentState = atom({
  key: "singledocumentState", // unique ID (with respect to other atoms/selectors)
  default: {}, // default value (aka initial value)
});
