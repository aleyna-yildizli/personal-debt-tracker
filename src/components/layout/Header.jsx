import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center px-10 py-3 ">
        <span className="text-sky-500 font-semibold text-2xl">DebtsMaster</span>
        <FontAwesomeIcon icon={faReact} className="text-sky-500 text-4xl" />
      </div>
      <hr className="w-full" />
    </div>
  );
}
