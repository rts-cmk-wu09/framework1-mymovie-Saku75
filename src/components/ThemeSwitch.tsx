import { useEffect, useState } from "react";

export default function ThemeSwitch(props: { className?: string }) {
  const [theme, setTheme] = useState("system");

  useEffect(() => {
    switch (localStorage.theme) {
      case "light":
        setTheme("light");
        break;
      case "dark":
        setTheme("dark");
        break;
      default:
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          document.documentElement.dataset.theme = "dark";
        } else {
          document.documentElement.dataset.theme = "light";
        }
        break;
    }
  }, []);

  useEffect(() => {
    switch (theme) {
      case "light":
        document.documentElement.dataset.theme = "light";
        localStorage.setItem("theme", "light");
        break;
      case "dark":
        document.documentElement.dataset.theme = "dark";
        localStorage.setItem("theme", "dark");
        break;
      default:
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          document.documentElement.dataset.theme = "dark";
        } else {
          document.documentElement.dataset.theme = "light";
        }
        localStorage.removeItem("theme");
        break;
    }
  }, [theme]);

  return (
    <select
      className={props.className}
      onChange={(e) => {
        setTheme(e.target.value);
      }}
      value={theme}
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="system">System</option>
    </select>
  );
}
