import Event from "./model/Event";
import Guest from "./model/Guest";

import complementaryGuest from "./functions/complementaryGuest";
import complementaryEvent from "./functions/complementaryEvent";
import createEmptyGuest from "./functions/createEmptyGuest";
import createEmptyEvent from "./functions/createEmptyEvent"

export type { Event, Guest };
export {
  complementaryGuest, createEmptyGuest,
  complementaryEvent, createEmptyEvent

};
