import { cn } from '@/app/lib/utils'

type DividerProps = {
  className?: string
}

export const Divider = ({ className }: DividerProps) => {
  return <div className={cn('w-full my-8 border-b border-b-gray-600')}></div>
}
