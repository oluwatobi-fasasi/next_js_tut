import '@/app/ui/global.css';
import { myInter } from './ui/font';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${myInter.className} antialiased`}>{children}</body>
    </html>
  );
}
