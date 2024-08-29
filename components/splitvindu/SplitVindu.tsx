'use client'

import {Button, HGrid} from "@navikt/ds-react";
import {ReactNode, useState} from "react";
import {Dokumentvisning} from "components/dokumentvisning/Dokumentvisning";
import styles from './SplitVindu.module.css'
import {ExpandIcon, ShrinkIcon} from "@navikt/aksel-icons";

interface Props {
    children: ReactNode;
}
export const SplitVindu = ({children}: Props) => {
    const [isSplit, setIsSplit] = useState<boolean>(true);
    return (
        <HGrid columns={isSplit ? 2 : 1} rows={'1fr'} className={styles.splitVindu} >
            <div>
                <div className={styles.splitStateButtonWrapper}>
                    <Button icon={isSplit ? <ExpandIcon /> : <ShrinkIcon />} type={'button'} onClick={() => setIsSplit(!isSplit)} />
                </div>
                {children}
            </div>
            {isSplit && <Dokumentvisning />}
        </HGrid>
    )
}
