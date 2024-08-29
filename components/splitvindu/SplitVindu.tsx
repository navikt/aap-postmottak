'use client'

import {HGrid} from "@navikt/ds-react";
import {ReactNode, useState} from "react";
import {Dokumentvisning} from "components/dokumentvisning/Dokumentvisning";

interface Props {
    children: ReactNode;
}
export const SplitVindu = ({children}: Props) => {
    const [isSplit, setIsSplit] = useState<boolean>(true);
    return (
       <HGrid columns={isSplit ? 2 : 1} rows={'1fr'} >
           <div>
               {children}
           </div>
           {isSplit && <Dokumentvisning />}
       </HGrid>
    )
}
