const ValueCard = ({ title, paragraph, icon: Icon }) => {
  return (
    <div className="p-4 rounded-xl shadow-xl border-b-2 border-l-2 border-CyanMain">
      <div className="flex items-center gap-x-2 mb-4 text-CyanMain">
        {Icon && <Icon size={40} />}
        <h1 className="text-2xl uppercase font-bold">{title}</h1>
      </div>

      <p className="text-justify">{paragraph}</p>
    </div>
  );
};

export default ValueCard;
