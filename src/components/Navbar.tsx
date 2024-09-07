import { Link, useNavigate } from "react-router-dom";

// hooks
import { useCheckActivePage } from "@/hooks/useCheckActivePage";

// components
import Image from "./Image";

const Navbar = () => {
  // custom hooks
  const isBlogPostPage = useCheckActivePage("post");

  // library hooks
  const navigate = useNavigate();

  // functions
  const navigateToHomepage = () => {
    navigate("/");
  };

  return (
    <nav
      className={`mb-4 flex justify-between ${isBlogPostPage && "pr-4 sm:pr-6 md:pr-8 lg:pr-16"}`}
    >
      <div
        className="flex cursor-pointer items-center"
        onClick={navigateToHomepage}
      >
        <Image
          src={
            "https://res.cloudinary.com/dfrd9rf2c/image/upload/v1725709299/devlog_assets/logo_iibuca.png"
          }
          alt="logo"
          className="size-16"
        />
        <span className="font-medium">DevLog</span>
      </div>

      <ul className="flex items-center gap-4">
        <Link to="/">
          <li className="font-semibold">Home</li>
        </Link>
        <Link to="/about">
          <li className="font-semibold">About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
