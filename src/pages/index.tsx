import { useDispatch } from "react-redux"

import { ShowName } from "../components/ShowName";
import { setName } from "../slices/nameSlice"

import { ShowAge } from "../components/ShowAge";
import { setAge } from "../slices/ageSlice"

function Home() {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center w-96">
      <input type="text" onChange={(e => dispatch(setName(e.target.value)))} />

      <div className="flex">
        <h1>My name is: </h1><ShowName />
      </div>

      <input type="text" onChange={(e => dispatch(setAge(e.target.value)))} />
      
      <div className="flex">
        <h1>My age is: </h1><ShowAge />
      </div>
    </div>
  )
}

export default Home
