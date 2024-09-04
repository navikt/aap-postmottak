import { BodyShort, Label } from '@navikt/ds-react';
import styles from './DokumentInfoBanner.module.css';

export const DokumentInfoBanner = ({}) => {
  return (
    <div className={styles.dokumentInfoBanner}>
      <div className={styles.left}>
        <div>
          <Label size="small">Søker</Label>
          <BodyShort size="small">Navn: Turid Skogen</BodyShort>
          <BodyShort size="small">Ident: 123456789</BodyShort>
        </div>
        <div>
          <Label size="small">Avsender</Label>
          <BodyShort size="small">Navn: Tor Nado</BodyShort>
          <BodyShort size="small">Ident: 123456789</BodyShort>
        </div>
        <div>
          <Label size="small">Dokument</Label>
          <BodyShort size="small">Tittel: Klage på vedtak</BodyShort>
          <BodyShort size="small">JournalpostId: 123456789</BodyShort>
        </div>
      </div>
    </div>
  );
};
