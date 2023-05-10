import { Outlet } from "react-router-dom";
import ThemeSwitch from "../components/ThemeSwitch";

export default function MainLayout() {
  return (
    <>
      <header className="grid h-16 grid-cols-3 px-4">
        <div className="col-start-2 place-self-center">
          <p className="font-serif text-base text-blue-900 dark:text-blue-100">
            MyMovies
          </p>
        </div>
        <div className="col-start-3 self-center justify-self-end">
          <label className="flex flex-col items-center">
            Theme:
            <ThemeSwitch />
          </label>
        </div>
      </header>
      <main className="flex h-full flex-col gap-4 overflow-y-auto">
        <Outlet />
      </main>
      <footer className="h-16 px-4"></footer>
    </>
  );
}
