import {useCallback, useContext} from "react";
import AppMenu from "../src/AppMenu";
import { ThemeContext, ThemeProvider } from "../src/ThemeContext";

function Inner() {
  const { toggleTheme, darkTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1>HOME</h1>
      <AppMenu toggleTheme={useCallback(toggleTheme,[])} />
      <h2>darkTheme: {darkTheme === true ? "true" : "false"}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <ThemeProvider>
      <Inner />
    </ThemeProvider>
  );
}
