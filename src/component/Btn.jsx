const Btn = ({ children, onClick, ariaLabel }) => {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className="flex h-17.5 w-27.5 cursor-pointer items-center justify-center rounded-full border-0 bg-btnPrimary text-current"
    >
      {children}
    </button>
  )
}

export default Btn
