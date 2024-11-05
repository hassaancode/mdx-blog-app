import { useState } from "react";

const ThemeProvider = () => {
    const [theme, setTheme] = useState("light");
  return (
    <div>ThemeProvider</div>
  )
}

export default ThemeProvider