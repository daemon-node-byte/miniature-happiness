import { Suspense } from "react";
import clsx from "clsx";
import TopNavbar from "@/components/common/TopNavbar.component";
import HomeHeroCta from '@/components/custom/HomeHeroCta.component'
import MobileNav from '@/components/common/MobileNav.component'
import { Icon } from '@iconify/react'

export default function Home() {
  return (
    <div className={clsx("h-[100vh] w-[100vw]", "overflow-hidden")}>
      <Suspense fallback={<Icon icon='svg-spinners:6-dots-scale'/>} >
      
      <TopNavbar />
      <MobileNav />
      <HomeHeroCta />
      </Suspense>
    </div>
  );
}
