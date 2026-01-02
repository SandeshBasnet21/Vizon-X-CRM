import Link from "next/link";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <nav className="w-full bg-blue-200 shadow-sm ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold">
            K
          </div>
          <span className="text-xl font-semibold text-gray-900">Karyavaar</span>
        </div>

        {/* Center: Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <Link href="#" className="font-bold hover:text-blue-600">
            Features
          </Link>
          <Link href="#" className="font-bold hover:text-blue-600">
            Pricingssss
          </Link>
          <Link href="#" className="font-bold hover:text-blue-600">
            About Us
          </Link>
          <Link href="#" className="font-bold hover:text-blue-600">
            Contact
          </Link>
        </div>

        {/* Right: Auth */}
        <div className="flex items-end gap-6">
          <Button label="Login" variant="text" />

          <Button label="Start Free Trial" variant="primary" showArrow />
        </div>
      </div>
    </nav>
  );
}
