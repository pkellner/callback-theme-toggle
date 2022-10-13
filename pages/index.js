import {useCallback, useContext, useMemo} from "react";
import AppMenu from "../src/AppMenu";
import { ThemeContext, ThemeProvider } from "../src/ThemeContext";

function Inner() {
  const { toggleTheme, darkTheme } = useContext(ThemeContext);
  
  const menu = useMemo(() => <AppMenu toggleTheme={toggleTheme} />);

  return (
    <div>
      <h1>HOME</h1>
      {menu}
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
