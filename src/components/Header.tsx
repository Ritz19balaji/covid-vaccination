import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full border-b bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-semibold text-primary">VacciTrack</h1>
        </div>
        <nav className="hidden lg:flex items-center space-x-6">
          <a href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Dashboard
          </a>
          <a href="/patients" className="text-sm font-medium hover:text-primary transition-colors">
            Patients
          </a>
          <a href="/records" className="text-sm font-medium hover:text-primary transition-colors">
            Records
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
