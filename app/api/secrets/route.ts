import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { Role } from "@/types";

export async function GET() {
    const cookieStore = await cookies();

    const role = cookieStore.get('session_role')?.value as Role | undefined;

    if (!role) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (role !== 'ADMIN') {
        return NextResponse.json({ error: 'Forbidden: Admins only' }, { status: 403 });
    }

    return NextResponse.json({ 
    secret: 'The launch codes are: 1234-5678',
    timestamp: new Date().toISOString()
  });
}