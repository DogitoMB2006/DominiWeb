interface CardProps {
  title: string
  description: string
  icon?: string
  image?: string
  className?: string
  children?: React.ReactNode
}

export default function Card({ title, description, icon, image, className = "", children }: CardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden ${className}`}>
      {image && (
        <div className="h-48 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
        </div>
      )}
      <div className="p-6">
        {icon && (
          <div className="text-4xl mb-4 text-center">
            {icon}
          </div>
        )}
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {children}
      </div>
    </div>
  )
}