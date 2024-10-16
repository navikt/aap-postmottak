'use client';

import { Button, HGrid, HStack } from '@navikt/ds-react';
import { ReactNode, useState } from 'react';
import styles from './SplitVindu.module.css';
import { ExpandIcon, SidebarLeftIcon } from '@navikt/aksel-icons';

interface Props {
  dokumentvisning: ReactNode;
  children: ReactNode;
}
export const SplitVindu = ({ dokumentvisning, children }: Props) => {
  const [is3070Split, setIs3070Split] = useState<boolean>(false);
  return (
    <HGrid columns={is3070Split ? '1fr 2fr' : '1fr 1fr'} gap={'4'} className={styles.splitVindu}>
      <div>
        <HStack padding={'1'}>
          <Button
            size={'small'}
            icon={is3070Split ? <ExpandIcon /> : <SidebarLeftIcon />}
            type={'button'}
            onClick={() => setIs3070Split(!is3070Split)}
          />
        </HStack>
        {children}
      </div>
      {dokumentvisning}
    </HGrid>
  );
};
