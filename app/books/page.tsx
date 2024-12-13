export default async function Page() {
    try {
        const response = await fetch("http://localhost:3000/api/books/");
        if (!response.ok) {
            throw new Error("Failed to fetch books");
        }
        const books = await response.json();

        return (
            <main>
                <code>
                    {JSON.stringify(books, null, 2)}
                </code>
            </main>
        );
    } catch (error) {
        return (
            <main>
                <p>Error loading books</p>
            </main>
        );
    }
}