export default function LuckyWheelFab({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        fixed bottom-6 right-6 
        w-16 h-16 
        rounded-full 
        bg-gradient-to-br from-pink-500 to-fuchsia-600 
        text-white 
        shadow-[0_6px_20px_rgba(0,0,0,0.25)] 
        flex items-center justify-center 
        text-3xl 
        hover:brightness-110 
        active:scale-95 
        transition-all 
        cursor-pointer 
        animate-bounce-slow
        z-50
      "
    >
      🎁
    </button>
  );
}
