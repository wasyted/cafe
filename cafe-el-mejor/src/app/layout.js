import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { CarritoProvider } from "../context/CarritoContext";

const font = Bricolage_Grotesque({
  subsets: ["latin"],
});

export const metadata = {
  title: "Café El Mejor", 
  description: "Sistema de gestión de compras y ventas para el Café El Mejor",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <CarritoProvider>
          {children}
        </CarritoProvider>
      </body>
    </html>
  );
}
