import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { GamepadIcon, Menu, Search } from "lucide-react";
import Link from "next/link";

const NavBar = () => {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <GamepadIcon className="h-6 w-6" />
          <span className="sr-only">PlayedIT</span>
        </Link>
        <Link
          href="/"
          className="text-muted-foreground transition-colors hover:text-foreground active:text-foreground"
        >
          Home
        </Link>
        <Link
          href="/games"
          className="text-muted-foreground transition-colors hover:text-foreground active:text-foreground"
        >
          Games
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <GamepadIcon className="h-6 w-6" />
              <span className="sr-only">PlayedIT</span>
            </Link>
            <Link href="" className="hover:text-foreground">
              Home
            </Link>
            <Link
              href="/games"
              className="text-muted-foreground hover:text-foreground"
            >
              Games
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search games..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form>
        <div className="flex items-center gap-4">
          <Button variant="outline" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
