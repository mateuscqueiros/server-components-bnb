export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className="h-[80px] flex items-center">Nav dos users</nav>
      <main className="p-6">{children}</main>
    </>
  );
}
