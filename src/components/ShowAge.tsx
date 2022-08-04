import { useSelector } from "react-redux"
import { valueAge } from "../slices/ageSlice";

function ShowAge() {
  const age = useSelector(valueAge);

  return (
    <h1 className="text-red-700">{age}</h1>
  )
}

export { ShowAge };
