const Card = ({ img, title, desc }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img src={img} alt={title} className="w-full h-48 object-cover"/>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="mt-2 text-gray-600">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
