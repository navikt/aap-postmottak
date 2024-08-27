'use client'

import {HGrid} from "@navikt/ds-react";
import {ReactNode} from "react";

interface Props {
    children: ReactNode;
}
export const SplitVindu = ({children}: Props) => {
   return (
       <HGrid columns={2}>
           <div>
               {children}
           </div>
           <div>
               Her viser vi dokument
           </div>
       </HGrid>
   )
}
