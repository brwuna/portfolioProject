import { cn } from '@/app/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavItemsProps = {
  label: string
  href: string
  target?: string
  rel?: string
}

export const NavItem = ({ label, href, target }: NavItemsProps) => {
  const pathName = usePathname()
  const isActive = pathName === href

  return (
    <Link href={href} passHref legacyBehavior>
      <a
        className={cn(
          'text-gray-400 flex items-center gap-2 font-medium font-mono',
          isActive && 'text-gray-50',
        )}
        target={target} // Aplicando a propriedade target aqui
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      >
        <span className="text-purple-400">#</span>
        {label}
      </a>
    </Link>
  )
}
