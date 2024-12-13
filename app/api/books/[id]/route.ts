import books from "../../db";
import { NextResponse } from "next/server";

export async function PUT(
    request: Request,
    context: { params: { id: string } }
) {
    const id = parseInt(context.params.id, 10);
    const book = await request.json();

    const index = books.findIndex((b) => b.id === id);
    if (index === -1) {
        return NextResponse.json(
            { error: `Book with ID ${id} not found` },
            { status: 404 }
        );
    }

    const updatedBooks = [...books];
    updatedBooks[index] = { ...book, id };
    return NextResponse.json(updatedBooks);
}

export async function DELETE(
    request: Request,
    context: { params: { id: string } }
) {
    const id = parseInt(context.params.id, 10);
    const index = books.findIndex((b) => b.id === id);

    if (index === -1) {
        return NextResponse.json(
            { error: `Book with ID ${id} not found` },
            { status: 404 }
        );
    }

    const updatedBooks = books.filter((b) => b.id !== id);
    return NextResponse.json(updatedBooks);
}
