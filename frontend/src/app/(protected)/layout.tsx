import { ProtectedGobalStyleProvider } from '@/components/ProtectedGobalStyleProvider/ProtectedGlobalStyleProvider';
import { Sidebar } from '@/components/Sidebar/Sidebar';

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProtectedGobalStyleProvider>
      <Sidebar />
      {children}
    </ProtectedGobalStyleProvider>
  );
}
