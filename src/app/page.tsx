import clsx from "clsx";
import TopNavbar from "@/components/TopNavbar.component";
import HomeHeroCta from '@/components/HomeHeroCta.component'
import MobileNav from "@/components/MobileNav.component";

export default function Home() {
  return (
    <div className={clsx("h-[100vh] w-[100vw]", "overflow-hidden")}>
      <TopNavbar />
      <MobileNav />
      <HomeHeroCta />
    </div>
  );
}
