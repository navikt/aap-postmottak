import {AvklarTemaMedDataFetching} from "../avklartema/AvklarTemaMedDataFetching";

interface Props {
  aktivtSteg: string;
  behandlingsReferanse: string;
}
export const StegKolonne = ({ aktivtSteg, behandlingsReferanse }: Props) => {
  // Det er her vi gjør datafetching og rendering av stegene
  return (
    <div>
        {aktivtSteg === 'AVKLAR_TEMA' && <AvklarTemaMedDataFetching id={behandlingsReferanse} />}
    </div>
  );
};
