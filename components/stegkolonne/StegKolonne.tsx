import { StegSuspense } from 'components/stegsuspense/StegSuspense';
import { AvklarTemaMedDataFetching } from '../avklartema/AvklarTemaMedDataFetching';
import { StegGruppe } from 'lib/types/types';

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
          <div>FINN_SAK</div>
        </StegSuspense>
      )}
      {aktivGruppe === 'KATEGORISER' && (
        <StegSuspense>
          <div>Kategoriser</div>
        </StegSuspense>
      )}
      {aktivGruppe === 'DIGITALISER' && (
        <StegSuspense>
          <div>Digitaliser</div>
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
