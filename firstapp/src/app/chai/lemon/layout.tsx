export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
          <h1>Lemon folder Nav</h1>
          {children}
          </>  
    );
  }
  