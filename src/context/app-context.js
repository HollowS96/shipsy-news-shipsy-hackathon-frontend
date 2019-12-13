import { createContext } from "react";

const appContext = createContext();

const { Provider, Consumer } = appContext;

export const AppProvider = Provider;
export const AppConsumer = Consumer;

export default appContext;
