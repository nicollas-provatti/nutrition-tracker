function Card({ icon, title, children }) {
  return (
    <div className="max-w-7xl m-auto bg-white border-gray-200 shadow-sm rounded-lg mt-10 p-6">
      <h2 className="flex items-center gap-2 text-xl font-semibold mb-4">
        {icon}
        {/* {}<LuTarget color="#2b7fff" size={20} /> */}
        {title}
      </h2>

      {children}
    </div>
  );
}

export default Card;
