export default class newDate {
  static format(data: Date): string {
    const pad = (n: number) => n.toString().padStart(2, "0");

    const d = data ?? new Date();
    const year = d.getFullYear();
    const month = pad(d.getMonth() + 1);
    const day = pad(d.getDate());
    const hour = pad(d.getHours());
    const minute = pad(d.getMinutes());

    return `${year}-${month}-${day}T${hour}:${minute}`;
  }

  static parser(data: string): Date {
    const [year, month, day] = data.split("T")[0].split("-");
    const [hour, minute] = data.split("T")[1].split(":");

    return new Date(
      parseInt(year),
      parseInt(month) - 1,
      parseInt(day),
      parseInt(hour),
      parseInt(minute)
    );
  }
}
