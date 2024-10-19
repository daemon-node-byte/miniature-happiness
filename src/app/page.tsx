import clsx from "clsx";
import TopNavbar from "@/components/TopNavbar.component";
import HomeHeroCta from '@/components/HomeHeroCta.component'

export default function Home() {
  return (
    <div className={clsx("h-[85vh]", "overflow-hidden")}>
      <TopNavbar />
      <HomeHeroCta />
    </div>
  );
}
