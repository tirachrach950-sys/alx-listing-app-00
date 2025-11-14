import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <div className="px-4 py-2 bg-gray-200 rounded-full text-xs cursor-pointer hover:bg-gray-300">
      {title}
    </div>
  );
};

export default Pill;

