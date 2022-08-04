import { useSelector } from "react-redux"
import { valueName } from "../slices/nameSlice";

function ShowName() {
  const name = useSelector(valueName);

  return (
    <h1 className="text-green-700">{name}</h1>
  )
}

export { ShowName };
