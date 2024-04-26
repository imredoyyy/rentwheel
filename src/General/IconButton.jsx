const IconButton = ({ className, children, onClick, aria_label }) => {
  return (
    <button
      onClick={onClick}
      className={`${className || ''} hover:bg-neutral-300 active:bg-neutral-200 [&_svg]:hover:stroke-color-50 relative flex items-center justify-center rounded-lg p-1.5 transition-colors duration-200 [&_svg]:h-6 [&_svg]:w-6`}
      aria-label={aria_label}
    >
      {children}
    </button>
  )
}

export default IconButton