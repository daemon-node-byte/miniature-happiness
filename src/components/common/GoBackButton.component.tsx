'use client'
import { useRouter } from 'next/navigation'
import { Icons } from '@/components/ui/Icons.components';


const GoBackButton: React.FC = () => {
const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <button className='text-[1.3rem] px-3 py-2 border rounded-lg' onClick={handleGoBack}>
      <span className='inline-block'>{Icons.goBack}</span>
      <span className='pl-1 text-indigo-400'>Go Back</span>
    </button>
  );
};

export default GoBackButton;