import clsx from "clsx";
import TopNavbar from "@/components/common/TopNavbar.component";
import HomeHeroCta from '@/components/custom/HomeHeroCta.component'
import MobileNav from '@/components/common/MobileNav.component'

export default function Home() {
  return (
    <div className={clsx("h-[100vh] w-[100vw]", "overflow-hidden")}>
      <TopNavbar />
      <MobileNav />
      <HomeHeroCta />
    </div>
  );
}
