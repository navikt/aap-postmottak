'use client';

import { BodyShort, Button, Dropdown, Label } from '@navikt/ds-react';
import styles from './DokumentInfoBanner.module.css';
import { ChevronDownIcon } from '@navikt/aksel-icons';
import { SettBehandllingPåVentModal } from '../settbehandlingpåventmodal/SettBehandllingPåVentModal';
import { useState } from 'react';

interface Props {
  journalpostId: string;
  behandlingsVersjon: number;
}

export const DokumentInfoBanner = ({ journalpostId, behandlingsVersjon }: Props) => {
  const [settBehandlingPåVentmodalIsOpen, setSettBehandlingPåVentmodalIsOpen] = useState(false);
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
      <Dropdown>
        <Button
          size={'small'}
          as={Dropdown.Toggle}
          variant={'secondary'}
          icon={<ChevronDownIcon title="chevron-saksmeny" fontSize="1.5rem" />}
          iconPosition={'right'}
        >
          Saksmeny
        </Button>
        <Dropdown.Menu>
          <Dropdown.Menu.GroupedList>
            <Dropdown.Menu.GroupedList.Heading>Saksmeny</Dropdown.Menu.GroupedList.Heading>
            <Dropdown.Menu.GroupedList.Item onClick={() => setSettBehandlingPåVentmodalIsOpen(true)}>
              Sett behandling på vent
            </Dropdown.Menu.GroupedList.Item>
          </Dropdown.Menu.GroupedList>
        </Dropdown.Menu>
      </Dropdown>

      <SettBehandllingPåVentModal
        journalpostId={journalpostId}
        behandlingVersjon={behandlingsVersjon}
        isOpen={settBehandlingPåVentmodalIsOpen}
        onClose={() => setSettBehandlingPåVentmodalIsOpen(false)}
      />
    </div>
  );
};
