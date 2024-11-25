import Guest from "../model/Guest";
import validateGuest from "./validateGuest";


export default function complementaryGuest(
  guest: Partial<Guest>
): Guest {
  const erros = validateGuest(guest);

  if (erros.length > 0) {
    throw new Error(erros.join("\n"));
  }

  const numberOfCompanions = guest.numberOfCompanions ?? 0;
  const hasCompanions =
    guest.hasCompanions &&
    guest.isConfirmed &&
    numberOfCompanions > 0;

  const updateGuest = {
    ...guest,
    numberOfCompanions: hasCompanions ? numberOfCompanions : 0,
    hasCompanions: hasCompanions,
  };

  return updateGuest as Guest;
}
