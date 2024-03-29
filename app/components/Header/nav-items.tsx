import { cn } from '@/app/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavItemsProps = {
  label: string
  href: string
}

export const NavItem = ({ label, href }: NavItemsProps) => {
  const pathName = usePathname()
  const isActive = pathName === href

  return (
    <Link
      href={href}
      className={cn(
        'text-gray-400 flex items-center gap-2 font-medium font-mono',
        isActive && 'text-gray-50',
      )}
    >
      <span className="text-purple-400">#</span>
      {label}
    </Link>
  )
}
