import { opprettBehandlingForJournalpost } from '../../../../../lib/services/dokumentmottakservice/dokumentMottakService';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
    const body = await req.json();
    try {
        await opprettBehandlingForJournalpost(body);
        return new Response(JSON.stringify({ message: `Behandling opprettet` }), { status: 200 });
    } catch (error) {
        console.log('error i route', error);
        return new Response(JSON.stringify({ message: JSON.stringify(error) }), { status: 500 });
    }
}
