import NavBar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main-div">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
