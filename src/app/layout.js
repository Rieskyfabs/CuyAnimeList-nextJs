import { Gabarito } from "next/font/google";
import "@/app/globals.css";
import NavigationBar from "@/components/NavigationBar";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "Anime Web App",
  description: "Website Anime Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${gabarito.className} bg-color-dark`}
        suppressHydrationWarning={true}
      >
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
