import { Outlet } from "react-router-dom";

// hooks
import { useCheckActivePage } from "@hooks/useCheckActivePage";

// components
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

const RootLayout = () => {
  const isBlogPostPage = useCheckActivePage("post");

  const containerStyles = `
    flex-grow
    ${isBlogPostPage ? "md:pl-8 lg:pl-16" : "px-4 sm:px-6 md:px-8 lg:px-16"}
  `;

  return (
    <div className="flex min-h-screen flex-col">
      <div className={containerStyles}>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default RootLayout;
