import { loader } from "../assets";
const Loader = ({ title }) => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <img className="w-32 h-32 object-contain" src={loader} alt="loader" />
      <h1 className="font-bold text-2xl">{title || "Loading...."}</h1>
    </div>
  );
};

export default Loader;
