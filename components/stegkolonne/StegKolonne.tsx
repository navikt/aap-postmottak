import { StegSuspense } from 'components/stegsuspense/StegSuspense';
import { AvklarTemaMedDataFetching } from '../avklartema/AvklarTemaMedDataFetching';
import { StegGruppe } from 'lib/types/types';
import { FinnSakMedDataFetching } from '../finnsak/FinnSakMedDataFetching';
import { KategoriserMedDataFetching } from '../kategoriser/KategoriserMedDataFetching';
import { DigitaliserDokumentMedDatafetching } from '../digitaliserdokument/DigitaliserDokumentMedDatafetching';
import { EndreTema } from '../endretema/EndreTema';

interface Props {
  aktivGruppe: StegGruppe;
  behandlingsreferanse: string;
}
export const StegKolonne = ({ aktivGruppe, behandlingsreferanse }: Props) => {
  // Det er her vi gjør datafetching og rendering av stegene
  return (
    <div>
      {aktivGruppe === 'AVKLAR_TEMA' && (
        <StegSuspense>
          <AvklarTemaMedDataFetching behandlingsreferanse={behandlingsreferanse} />
        </StegSuspense>
      )}
      {aktivGruppe === 'AVKLAR_SAK' && (
        <StegSuspense>
          <FinnSakMedDataFetching behandlingsreferanse={behandlingsreferanse} />
        </StegSuspense>
      )}
      {aktivGruppe === 'KATEGORISER' && (
        <StegSuspense>
          <KategoriserMedDataFetching behandlingsreferanse={behandlingsreferanse} />
        </StegSuspense>
      )}
      {aktivGruppe === 'DIGITALISER' && (
        <StegSuspense>
          <DigitaliserDokumentMedDatafetching behandlingsreferanse={behandlingsreferanse} />
        </StegSuspense>
      )}
      {aktivGruppe === 'OVERLEVER_TIL_FAGSYSTEM' && (
        <StegSuspense>
          <div>Overlever</div>
        </StegSuspense>
      )}
      {aktivGruppe === 'ENDRE_TEMA' && (
        <StegSuspense>
          <EndreTema />
        </StegSuspense>
      )}
    </div>
  );
};
