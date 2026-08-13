import { NextResponse } from 'next/server';
import { getMembers, addMember } from '@/lib/data';

export async function GET() {
  return NextResponse.json(getMembers());
}

export async function POST(request) {
  const body = await request.json();
  if (!body.name || !body.role) {
    return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 });
  }
  const member = addMember(body);
  return NextResponse.json(member, { status: 201 });
}
