import Guest from "./Guest";


export default interface Event {
  id: string;
  alias: string;
  password: string;
  name: string;
  date: Date;
  place: string;
  description: string;
  image: string;
  backgroundImage: string;
  publicExpected: number;
  guests: Guest[];
}
