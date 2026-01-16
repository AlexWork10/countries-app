import { ModeToggle } from "./ModeToggleButton";

function Navbar() {
  return (
    <header className="bg-card px-2 py-4 flex justify-between shadow-sm sticky top-0 z-50 items-center">
      <h1 className="font-bold text-sm">Where in the world?</h1>
      <ModeToggle />
    </header>
  );
}

export default Navbar;
