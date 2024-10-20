import LoadingSVG from '@/components/ui/LoadingSVG.component'
export default function LoadingPage() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <LoadingSVG />
      <h3>Loading...</h3>
    </div>
  )
}