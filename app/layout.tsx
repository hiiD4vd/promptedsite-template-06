
import "./globals.css";

export const metadata = {
  title: "PROMPTEDSITE 3D Gallery",
  description: "3D Gallery Resource",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="next-size-adjust" />
        {/* Inject legacy styles and head scripts */}
        <div dangerouslySetInnerHTML={{ __html: `<link rel="stylesheet" href="/legacy_next/static/css/32a8300f1b074d9a.css" crossorigin="" data-precedence="next">
<link rel="stylesheet" type="text/css" href="/legacy_next/static/css/27e8d1d4445b2d33.css">
<style></style>
<style>a[aria-label="Twitter"], a[aria-label="Instagram"], a[aria-label="YouTube"], a[aria-label="GitHub"] { display: none !important; }</style>` }} />
      </head>
      <body className="__variable_d758cf __variable_554217 __variable_9e22ed antialiased __className_f367f3 __variable_6d0c14" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
