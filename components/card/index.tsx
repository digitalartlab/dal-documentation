import cn from 'clsx'
import Link from 'next/link'

import styles from './style.module.css'

export const Card = ({
  title,
  icon,
  arrow = true,
  href,
  ...props
}: { 
  title: string
  icon?: string
  arrow?: boolean
  href?: string
  [key: string]: any
}) => {
  const animatedArrow = arrow ? (
    <span
      className={cn(
        'transition-transform duration-75',
        'group-hover:translate-x-[2px]'
      )}
    >
      →
    </span>
  ) : null

  return (
    <Link
      href={href}
      className={cn(
        styles.card,
        'group flex flex-col justify-start overflow-hidden rounded-lg border border-gray-200 bg-transparent text-current no-underline shadow-sm shadow-gray-100 transition-all duration-200 dark:border-neutral-800 dark:shadow-none',
        'hover:border-gray-300 hover:bg-slate-50 hover:shadow-md hover:shadow-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-900 dark:hover:shadow-none',
        'active:shadow-sm active:shadow-gray-200'
      )}
      {...props}
    >
      <span
        className={cn(
          styles.title,
          'gap-2 p-4 text-gray-700 dark:text-neutral-200',
          'hover:text-gray-900 dark:hover:text-neutral-50'
        )}
      >
        <span>{icon}</span>
        {title}
        {animatedArrow}
      </span>
    </Link>
  )
}

export function Cards({ children, num, ...props }) {
  return (
    <div
      className={cn(styles.cards, 'mt-4 gap-4')}
      {...props}
      style={{
        '--rows': num || 3,
        ...props.style
      }}
    >
      {children}
    </div>
  )
}