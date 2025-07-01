// pages/404.js
import Link from 'next/link';
import Head from 'next/head';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Nagpur Heights</title>
        <meta
          name="description"
          content="The page you’re looking for doesn’t exist. Visit our homepage to browse verified properties in Nagpur."
        />
      </Head>

      <div className="not-found-container">
        <h1>404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>The page you’re looking for doesn’t exist or was moved.</p>
        <Link href="/" className="back-home">
          ← Back to Homepage
        </Link>
      </div>

      <style jsx>{`
        .not-found-container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          background: #f2f2f2;
          color: #333;
          padding: 2rem;
        }

        .not-found-container h1 {
          font-size: 6rem;
          color: #dc3545;
          margin-bottom: 0.5rem;
        }

        .not-found-container h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .not-found-container p {
          font-size: 1rem;
          margin-bottom: 2rem;
        }

        .back-home {
          font-size: 1rem;
          color: #0070f3;
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}
