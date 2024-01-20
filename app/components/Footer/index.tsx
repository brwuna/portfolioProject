import { IoMdHeart } from 'react-icons/io'

export const Footer = () => {
  return (
    <footer className="h-14 w-full flex items-center justify-center">
      <span className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-gray-400">
        Made by
        <IoMdHeart className="text-purple-500" size={13} />
        by
        <strong className="font-medium">Bruna Nascimento</strong>
      </span>
    </footer>
  )
}
