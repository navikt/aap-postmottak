import {describe, expect, it} from "vitest";
import { DigitaliserSøknad} from "./DigitaliserSøknad";
import {render, screen} from "@testing-library/react";
import { userEvent } from '@testing-library/user-event';

describe('DigitaliserSøknad', () => {
    const user = userEvent.setup();

    it('legg til barn og sjekk at felter dukker opp', async () => {
        render(<DigitaliserSøknad journalpostId={'1'} behandlingsVersjon={1} />);

        const leggTilBarnKnapp = screen.getByRole('button', { name: /legg til/i });
        await user.click(leggTilBarnKnapp);

        expect(screen.getByRole('textbox', {name: /fødselsnummer/i})).toBeVisible();
        expect(screen.getByRole('textbox', {name: /fornavn/i})).toBeVisible();
        expect(screen.getByRole('textbox', {name: /etternavn/i})).toBeVisible();
        expect(screen.getByRole('combobox', {name: /relasjon/i})).toBeVisible();
    })

    it('legg til barn og sjekk at det kan slettes igjen', async () => {
        render(<DigitaliserSøknad journalpostId={'1'} behandlingsVersjon={1} />);

        const leggTilBarnKnapp = screen.getByRole('button', { name: /legg til/i });
        await user.click(leggTilBarnKnapp);

        const slettKnapp = screen.getByRole('img', { name: /Slett/i });
        await user.click(slettKnapp);
    })

})