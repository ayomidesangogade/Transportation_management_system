function IconButton({ icon: Icon }) {
  return (
    <button className="p-2 hover:bg-gray-100 rounded-lg">
      <Icon size={20} />
    </button>
  );
}

export default IconButton