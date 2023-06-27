import { SideBar } from "@/components/SideBar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          {/*Side Bar*/}
          <SideBar />
          {/*Client Provider - Notifications*/}

          <div className="flex-1 bg-slate-800">{children}</div>
        </div>
      </body>
    </html>
  );
}
