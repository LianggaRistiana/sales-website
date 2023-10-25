import { Inter } from "next/font/google";
import NavbarComponent from "@/components/UtilComponent/NavbarComponent";
import ForWomenComponent from "@/components/ForWomenComponent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
        <NavbarComponent/>
        <ForWomenComponent/>
    </>
  );
}
