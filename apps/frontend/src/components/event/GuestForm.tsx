import { Guest } from "core";
import YesOrNot from "../shared/YesOrNot";
import { InputField } from "../shared/InputField";

export interface FormguestProps {
  guest: Partial<Guest>;
  changeGuest: (guest: Partial<Guest>) => void;
}

export default function GuestForm({ changeGuest, guest }: FormguestProps) {
  return (
    <div className="flex flex-col gap-5">
      <InputField
        label="Nome"
        value={guest.name ?? ""}
        onChange={(e: any) =>
          changeGuest({ ...guest, name: e.target.value })
        }
      />
      <InputField
        label="Email"
        value={guest.email ?? ""}
        onChange={(e: any) =>
          changeGuest({ ...guest, email: e.target.value })
        }
      />
      <div className="flex gap-5">
        <YesOrNot
          label="Presença Confirmada?"
          value={guest.isConfirmed ?? true}
          onChange={(value: any) =>
            changeGuest({ ...guest, isConfirmed: value })
          }
          className="flex-1"
        />
        {guest.isConfirmed && (
          <div className="flex-1 flex gap-5">
            <YesOrNot
              label="Possui Acompanhantes?"
              value={guest.hasCompanions ?? false}
              onChange={(valor: any) =>
                changeGuest({
                  ...guest,
                  hasCompanions: valor,
                  numberOfCompanions: valor ? 1 : 0,
                })
              }
              className="flex-1"
            />
            {guest.hasCompanions && (
              <InputField
                label="Quantos Acompanhantes?"
                value={guest.numberOfCompanions ?? 1}
                onChange={(e: any) =>
                  changeGuest({
                    ...guest,
                    numberOfCompanions: +e.target.value,
                  })
                }
                min={1}
                type="number"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
