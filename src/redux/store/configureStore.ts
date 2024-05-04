import storage from "@/src/store/persist/config.persist";

export const persistConfig = {
  key: "root",
  storage,
  whitelist: ["currencySlice"],
};
