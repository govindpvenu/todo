export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-screen flex flex-col">
      <section className="h-full mt-2 w-full  flex-1 flex flex-col items-center justify-center  gap-4 p-6 md:p-10">
        {children}
      </section>
    </main>
  );
}
