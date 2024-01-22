import Image from 'next/image'

export const ProjectCard = () => {
  return (
    <div className="rounded-lg h-[436px] flex flex-col bg-gray-800/30 overflow-hidden border-2 border-[#030014] hover:border-purple-500 opacity-50 hover:opacity-100 transition-all group">
      <div className="w-full h-48 overflow-hidden">
        <Image
          width={380}
          height={200}
          src="https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Thumbnail do projeto"
          unoptimized
          className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"
        />
      </div>

      <div className="flex flex-1 flex-col p-8">
        <strong className="font-medium text-gray-50/90 group-hover:text-purple-500 transition-all">
          Nome do Projeto
        </strong>
        <p className="mt-2 text-gray-400 line-clamp-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
          saepe sunt praesentium dolore.
        </p>
        <span className="text-gray-300 text-sm font-medium block mt-auto truncate">
          Tecnologias
        </span>
      </div>
    </div>
  )
}
