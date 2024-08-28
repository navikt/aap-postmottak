import { BodyShort, Label } from '@navikt/ds-react';
import styles from './DokumentInfoBanner.module.css';

export const DokumentInfoBanner = ({}) => {
  return (
    <div className={styles.dokumentInfoBanner}>
      <div className={styles.left}>
        <div>
          <Label size="small">Journalpost</Label>
          <BodyShort size="small">123456789</BodyShort>
        </div>
        <div>
          <Label size="small">Ident</Label>
          <BodyShort size="small">123456789</BodyShort>
        </div>
      </div>
    </div>
  );
};
