import { ReactNode } from 'react'

interface ThreadStepProps {
  number: number
  title: string
  description: string
  icon: ReactNode
  isLast?: boolean
  children?: ReactNode;
}

export function ThreadStep({ number, title, description, icon, isLast = false }: ThreadStepProps) {
  return (
    <div className="flex items-start max-w-md mx-auto">
      <div className="flex flex-col items-center mr-6">
        <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-2 relative z-10">
          {icon}
        </div>
        {!isLast && (
          <div className="w-px h-24 bg-gradient-to-b from-orange-500 to-orange-300/50 relative z-0" />
        )}
      </div>
      <div className="flex-1 pt-2 pb-8">
        <h3 className="text-xl font-semibold mb-2 text-orange-800">{title}</h3>
        <p className="text-orange-700 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

