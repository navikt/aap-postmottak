import { describe, it, expect } from "vitest";
import {render, screen } from '@testing-library/react'
import {AvklarTema} from "./AvklarTema";

describe('AvklarTema', () => {
    it('Skal ha en oversikt', () => {
        render(<AvklarTema behandlingsVersjon={1} id={'123'} />)
        const heading = screen.getByText('Avklar tema');
        expect(heading).toBeVisible();
    })
    it('Har et valg for om dokumentet hører til tema AAP eller ikke', () => {
        render(<AvklarTema behandlingsVersjon={1} id={'123'} />)
        expect(screen.getByRole('group', {name: 'Er dokumentet riktig journalført på tema AAP?'})).toBeVisible()
    })
})