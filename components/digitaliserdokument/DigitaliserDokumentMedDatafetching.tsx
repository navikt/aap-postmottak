import { DigitaliserSøknad } from './søknad/DigitaliserSøknad';
import { hentDigitaliseringGrunnlag, hentFlyt } from '../../lib/services/dokumentmottakservice/dokumentMottakService';
import { DigitaliserMeldekort } from 'components/digitaliserdokument/meldekort/DigitaliserMeldekort';
import { BodyShort } from '@navikt/ds-react';

interface Props {
  behandlingsreferanse: string;
}
export const DigitaliserDokumentMedDatafetching = async ({ behandlingsreferanse }: Props) => {
  const flyt = await hentFlyt(behandlingsreferanse);
  const isReadOnly: boolean = !!flyt.visning.readOnly;
  const grunnlag = await hentDigitaliseringGrunnlag(behandlingsreferanse);
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
  } else {
    return <BodyShort>{`Digitalisering støttes foreløpig ikke for kategorien: ${grunnlag.kategori}`}</BodyShort>;
  }
};
