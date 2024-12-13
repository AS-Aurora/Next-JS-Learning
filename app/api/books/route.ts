import books from "../db";
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(books);
}

export async function POST(request: Request) {
    try {
        const newBook = await request.json();
        const updatedBooks = [...books, newBook];
        return NextResponse.json(updatedBooks);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to add book" },
            { status: 400 }
        );
    }
}
