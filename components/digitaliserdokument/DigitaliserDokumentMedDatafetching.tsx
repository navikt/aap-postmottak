import { DigitaliserSøknad } from './søknad/DigitaliserSøknad';
import { hentDigitaliseringGrunnlag, hentFlyt } from '../../lib/services/dokumentmottakservice/dokumentMottakService';
import { DigitaliserPliktkort } from './pliktkort/DigitaliserPliktkort';

interface Props {
  journalpostId: string;
}
export const DigitaliserDokumentMedDatafetching = async ({ journalpostId }: Props) => {
  const flyt = await hentFlyt(journalpostId);
  const grunnlag = await hentDigitaliseringGrunnlag(journalpostId);
  if (grunnlag.kategori === 'SØKNAD') {
    return <DigitaliserSøknad journalpostId={journalpostId} behandlingsVersjon={flyt.behandlingVersjon} />;
  } else if (grunnlag.kategori === 'PLIKTKORT') {
    return <DigitaliserPliktkort behandlingsVersjon={flyt.behandlingVersjon} journalpostId={journalpostId} />;
  } else if (grunnlag.kategori === 'UKJENT') {
    return <div>UKJENT</div>;
  } else if (grunnlag.kategori === 'AKTIVITETSKORT') {
    return <div>AKTIVITETSKORT</div>;
  }
  assertNever(grunnlag.kategori);
};
function assertNever(value: string): never {
  throw new Error(`Ikke implementert verdi for grunnlag.kategori i digitaliserdokument: ${value}`);
}
