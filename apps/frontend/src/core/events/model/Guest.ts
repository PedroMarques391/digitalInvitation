export default interface Guest {
  id: string;
  name: string;
  email: string;
  isConfirmed: boolean;
  hasCompanions: boolean;
  numberOfCompanions: number;
}
