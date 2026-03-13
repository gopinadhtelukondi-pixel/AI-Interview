function Button({ children, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-full py-3 rounded-xl 
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white font-semibold
      hover:scale-105 transition duration-300
      disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
}

export default Button;