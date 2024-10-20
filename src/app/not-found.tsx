import { font } from '@/global/font';
import clsx from 'clsx'
import GoBackButton from '@/components/common/GoBackButton.component';
 
export default function NotFoundPage () {
  return (
    <div className='h-[100vh]'>
      <main className='flex justify-center items-center flex-col h-full space-y-10'>
        <div className='flex justify-center items-center'>
        <div className="border-r-2 pr-4">
          <span className={clsx(font.className, 'text-6xl', 'text-indigo-400')}>404</span>
        </div>
        <div className='pl-4'>
          <p>Opps! Seems like we can&apos;t<br/> find the requested page.</p>
        </div>
        </div>
      <GoBackButton />
      </main>
    </div>
  )
}