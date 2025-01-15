import { DigitaliserSøknad } from './søknad/DigitaliserSøknad';
import { hentDigitaliseringGrunnlag, hentFlyt } from '../../lib/services/dokumentmottakservice/dokumentMottakService';
import { DigitaliserMeldekort } from 'components/digitaliserdokument/meldekort/DigitaliserMeldekort';

interface Props {
  behandlingsreferanse: string;
}
export const DigitaliserDokumentMedDatafetching = async ({ behandlingsreferanse }: Props) => {
  const flyt = await hentFlyt(behandlingsreferanse);
  const isReadOnly: boolean = !!flyt.visning.readOnly;
  console.log('flyt');
  console.log(flyt);
  const grunnlag = await hentDigitaliseringGrunnlag(behandlingsreferanse);
  console.log('grunnlag');
  console.log(grunnlag);
  if (grunnlag.kategori === 'SØKNAD') {
    return (
      <DigitaliserSøknad
        behandlingsreferanse={behandlingsreferanse}
        behandlingsVersjon={flyt.behandlingVersjon}
        grunnlag={grunnlag}
        readOnly={isReadOnly}
      />
    );
  } else if (grunnlag.kategori === 'PLIKTKORT') {
    return (
      <DigitaliserMeldekort
        behandlingsVersjon={flyt.behandlingVersjon}
        behandlingsreferanse={behandlingsreferanse}
        readOnly={isReadOnly}
      />
    );
  } else if (grunnlag.kategori === 'AKTIVITETSKORT') {
    return <div>AKTIVITETSKORT</div>;
  }
  assertNever(grunnlag.kategori);
};
function assertNever(value: string): never {
  throw new Error(`Ikke implementert verdi for grunnlag.kategori i digitaliserdokument: ${value}`);
}
