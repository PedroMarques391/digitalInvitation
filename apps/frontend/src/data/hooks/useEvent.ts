
import { useContext } from "react";
import { EventContext } from "../context/EventContext";


const useEvent = () => useContext(EventContext)

export default useEvent