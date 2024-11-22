import { useContext } from "react";
import { EventContext } from "../contexts/eventContext";

const useEvent = () => useContext(EventContext)

export default useEvent