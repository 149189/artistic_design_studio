import Link from 'next/link'
import { forwardRef } from 'react'
import { motion } from 'framer-motion'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'medium' | 'large'
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ children, href, onClick, variant = 'primary', size = 'medium', className = '', disabled = false, type = 'button', ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50'
    
    const variantClasses = {
      primary: 'bg-white text-cyan-600 hover:bg-white/90 hover:scale-105 shadow-lg hover:shadow-xl',
      secondary: 'bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm',
      outline: 'border-2 border-white text-white hover:bg-white hover:text-cyan-600'
    }
    
    const sizeClasses = {
      small: 'px-4 py-2 text-sm',
      medium: 'px-6 py-3 text-base',
      large: 'px-8 py-4 text-lg'
    }
    
    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`
    
    if (href) {
      return (
        <Link href={href} className={classes} {...props}>
          <motion.span
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center"
          >
            {children}
          </motion.span>
        </Link>
      )
    }
    
    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`${classes} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        whileHover={disabled ? {} : { scale: 1.02 }}
        whileTap={disabled ? {} : { scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'
export default Button