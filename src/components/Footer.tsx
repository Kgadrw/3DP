import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import { Separator } from "../components/ui/separator";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

interface FooterProps {
  logo: string;
}

const Footer: React.FC<FooterProps> = ({ logo }) => {
  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/service" },
    { name: "Data", href: "/data" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      href: " https://x.com/3dpRwanda ",
      color: "text-[#1DA1F2]",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/company/106318788/admin/dashboard/ ",
      color: "text-[#0A66C2]",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      href: " https://www.instagram.com/datadrivendecisionpartners/?hl=en",
      color: "text-[#E4405F]",
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-5 h-5" />,
      href: " https://www.facebook.com/profile.php?id=61572571655706 ",
      color: "text-[#1877F2]",
    },
  ];

  return (
    <footer className="bg-[#122e46] text-white">
      <div className="container px-4 py-12 mx-auto space-y-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4 md:col-span-4">
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="Company Logo"
                className="object-contain h-12"
                style={{ width: "100px", height: "70px" }}
              />
            </Link>
            <p className="max-w-md text-gray-300">
              Empowering businesses with data-driven insights and innovative
              solutions for better decision-making.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="icon"
                  asChild
                  className={`rounded-full hover:bg-white/10 transition-colors ${social.color}`}
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold mb-4 text-[#fdb740]">
              Quick Links
            </h3>
            <nav className="grid grid-cols-2 gap-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-300 hover:text-[#fdb740] transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold mb-4 text-[#fdb740]">
              Contact Us
            </h3>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-[#fdb740]" />
                <a
                  href="mailto:3dp.rwanda@gmail.com "
                  className="hover:text-[#fdb740] transition-colors"
                >
                  3dp.rwanda@gmail.com 
                </a>
              </p>
              <p>
                <br />
                Kigali, Rwanda
              </p>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-700" />

        {/* Footer Bottom */}
        <div className="flex flex-col gap-4 text-sm text-gray-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()}{" "}
            <a
              href="https://data-insights-partners.vercel.app"
              className="hover:text-[#fdb740] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              3DP
            </a>
            . All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="hover:text-[#fdb740] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-[#fdb740] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
