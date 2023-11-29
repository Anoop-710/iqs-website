import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Hero from "./Components/Hero";
import Courses from "./Components/Courses";
import "./globals.css";
import { Inter } from "next/font/google";
import Features from "./Components/Features";
import Testimonials from "./Components/Testimonials";
import Test from "./Components/Test";
import Footer from "../Components/Footer";
import Trainers from "./Components/Trainers";
import Nav from "./Components/Nav";
import Landing from "./Components/Landing";
import Dropdown from "./Components/Dropdown";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Nav />
      <Main /> */}
        <Landing />
        <Hero />
        <Courses />
        <Features />
        {/* <Testimonials /> */}
        <Trainers />
        <Footer />

        {children}
      </body>
    </html>
  );
}