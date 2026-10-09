import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Onde tem o Sol, é pra lá que eu vou - Litoral SP saindo de Santo André',
  description: 'Guia solar inteligente do litoral brasileiro partindo de Santo André - SP. Rotas, trânsito na serra, balneabilidade CETESB, clima e praias ensolaradas.',
  openGraph: {
    title: 'Onde tem o Sol, é pra lá que eu vou - Litoral SP saindo de Santo André',
    description: 'Guia solar inteligente do litoral brasileiro partindo de Santo André - SP.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Onde tem o Sol, é pra lá que eu vou',
    description: 'Guia solar inteligente do litoral brasileiro partindo de Santo André - SP.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Work+Sans:wght@400;500;600;700&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
