export default function themeToggle() {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.documentElement.classList.remove("dark");
    document.body.classList.add("light");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    document.body.classList.remove("light");
    localStorage.setItem("theme", "dark");
  }
  return theme;
}
