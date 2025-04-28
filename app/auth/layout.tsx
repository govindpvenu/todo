export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex h-screen flex-col">
            <section className="mt-2 flex h-full w-full flex-1 flex-col items-center justify-center gap-4 p-6 md:p-10">
                {children}
            </section>
        </main>
    );
}
