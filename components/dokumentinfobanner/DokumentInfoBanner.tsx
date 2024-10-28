'use client';

import { BodyShort, Button, Dropdown, Label } from '@navikt/ds-react';
import styles from './DokumentInfoBanner.module.css';
import { ChevronDownIcon } from '@navikt/aksel-icons';
import { SettBehandllingPåVentModal } from '../settbehandlingpåventmodal/SettBehandllingPåVentModal';
import { useState } from 'react';
import { JournalpostInfo } from 'lib/types/types';
import { useParams } from 'next/navigation';

interface Props {
  journalpostId: string;
  behandlingsVersjon: number;
  journalpostInfo: JournalpostInfo;
}

export const DokumentInfoBanner = ({ journalpostId, behandlingsVersjon, journalpostInfo }: Props) => {
  const params: { journalpostId: string } = useParams();
  const [settBehandlingPåVentmodalIsOpen, setSettBehandlingPåVentmodalIsOpen] = useState(false);
  return (
    <div className={styles.dokumentInfoBanner}>
      <div className={styles.left}>
        <div>
          <Label size="small">Journalpost</Label>
          <BodyShort size="small">{`JournalpostId: ${params.journalpostId}`}</BodyShort>
        </div>
        <div>
          <Label size="small">Søker</Label>
          <BodyShort size="small">{journalpostInfo.søker?.navn}</BodyShort>
          <BodyShort size="small">{`Ident: ${journalpostInfo.søker?.ident}`}</BodyShort>
        </div>
        {journalpostInfo.avsender?.ident && (
          <div>
            <Label size="small">Avsender</Label>
            <BodyShort size="small">{journalpostInfo.avsender?.navn}</BodyShort>
            <BodyShort size="small">{`Ident: ${journalpostInfo.avsender?.ident}`}</BodyShort>
          </div>
        )}
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
