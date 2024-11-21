import { Id } from "../../shared";
import Guest from "../model/Guest";

export default function createEmptyGuest(): Partial<Guest> {
  return {
    id: Id.new(),
    name: "",
    email: "",
    isConfirmed: true,
    hasCompanions: false,
    numberOfCompanions: 0,
  };
}
