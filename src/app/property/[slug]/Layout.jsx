// app/property/[slug]/layout.jsx

export default function PropertyLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
        {children}
      </body>
    </html>
  );
}
