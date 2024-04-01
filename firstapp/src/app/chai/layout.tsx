export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <h1>Chai folder Nav</h1>
        {children}
        </>  
  );
}
