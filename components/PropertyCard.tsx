import { PropertyProps } from "@/interfaces";

const PropertyCard: React.FC<PropertyProps> = ({
  name,
  price,
  rating,
  image,
}) => {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-gray-500 text-sm">⭐ {rating}</p>
        <p className="text-blue-600 font-bold mt-2">${price}/night</p>
      </div>
    </div>
  );
};

export default PropertyCard;

