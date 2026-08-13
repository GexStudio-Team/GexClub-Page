import { NextResponse } from 'next/server';
import { getEvents, registerEvent } from '@/lib/data';

export async function GET() {
  return NextResponse.json(getEvents());
}

export async function POST(request) {
  const body = await request.json();
  const event = registerEvent(body.id);
  if (!event) {
    return NextResponse.json({ error: 'Evento no encontrado' }, { status: 404 });
  }
  return NextResponse.json(event);
}
