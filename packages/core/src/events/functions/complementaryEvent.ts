

import { Id, Password } from "../../shared";
import Event from "../model/Event";
import validateEvent from "./validateEvent";

export default function complementaryEvent(
  partialEvent: Partial<Event>
): Event {
  const erros = validateEvent(partialEvent);

  if (erros.length) {
    throw new Error(erros.join("\n"));
  }

  const event: Event = {
    ...partialEvent,
    id: partialEvent.id ?? Id.new(),
    password: partialEvent.password ?? Password.new(20),
    publicExpected: +(partialEvent.publicExpected ?? 1),
  } as Event;

  return event;
}
