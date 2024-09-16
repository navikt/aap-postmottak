import { StegSuspense } from 'components/stegsuspense/StegSuspense';
import { AvklarTemaMedDataFetching } from '../avklartema/AvklarTemaMedDataFetching';
import { StegGruppe } from 'lib/types/types';
import {FinnSakMedDataFetching} from "../finnsak/FinnSakMedDataFetching";
import {KategoriserMedDataFetching} from "../kategoriser/KategoriserMedDataFetching";
import {DigitaliserDokumentMedDatafetching} from "../digitaliserdokument/DigitaliserDokumentMedDatafetching";

interface Props {
  aktivGruppe: StegGruppe;
  journalpostId: string;
}
export const StegKolonne = ({ aktivGruppe, journalpostId }: Props) => {
  // Det er her vi gjør datafetching og rendering av stegene
  return (
    <div>
      {aktivGruppe === 'AVKLAR_TEMA' && (
        <StegSuspense>
          <AvklarTemaMedDataFetching journalpostId={journalpostId} />
        </StegSuspense>
      )}
      {aktivGruppe === 'FINN_SAK' && (
        <StegSuspense>
          <FinnSakMedDataFetching journalpostId={journalpostId} />
        </StegSuspense>
      )}
      {aktivGruppe === 'KATEGORISER' && (
        <StegSuspense>
          <KategoriserMedDataFetching journalpostId={journalpostId} />
        </StegSuspense>
      )}
      {aktivGruppe === 'DIGITALISER' && (
        <StegSuspense>
          <DigitaliserDokumentMedDatafetching journalpostId={journalpostId} />
        </StegSuspense>
      )}
      {aktivGruppe === 'OVERLEVER_TIL_FAGSYSTEM' && (
        <StegSuspense>
          <div>Overlever</div>
        </StegSuspense>
      )}
    </div>
  );
};
