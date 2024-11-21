

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

  const Event: Event = {
    ...partialEvent,
    id: partialEvent.id ?? Id.new(),
    senha: partialEvent.password ?? Password.new(20),
    publicoEsperado: +(partialEvent.publicExpected ?? 1),
  } as Event;

  return Event;
}
