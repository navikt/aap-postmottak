import { DigitaliserSøknad } from './søknad/DigitaliserSøknad';
import { hentDigitaliseringGrunnlag, hentFlyt } from '../../lib/services/dokumentmottakservice/dokumentMottakService';
import { DigitaliserMeldekort } from './pliktkort/DigitaliserMeldekort';

interface Props {
  behandlingsreferanse: string;
}
export const DigitaliserDokumentMedDatafetching = async ({ behandlingsreferanse }: Props) => {
  const flyt = await hentFlyt(behandlingsreferanse);
  const grunnlag = await hentDigitaliseringGrunnlag(behandlingsreferanse);
  if (grunnlag.kategori === 'SØKNAD') {
    return <DigitaliserSøknad behandlingsreferanse={behandlingsreferanse} behandlingsVersjon={flyt.behandlingVersjon} />;
  } else if (grunnlag.kategori === 'PLIKTKORT') {
    return <DigitaliserMeldekort behandlingsVersjon={flyt.behandlingVersjon} behandlingsreferanse={behandlingsreferanse} />;
  } else if (grunnlag.kategori === 'AKTIVITETSKORT') {
    return <div>AKTIVITETSKORT</div>;
  }
  assertNever(grunnlag.kategori);
};
function assertNever(value: string): never {
  throw new Error(`Ikke implementert verdi for grunnlag.kategori i digitaliserdokument: ${value}`);
}
