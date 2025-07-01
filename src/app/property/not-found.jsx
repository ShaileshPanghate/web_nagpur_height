// app/not-found.js
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function NotFound() {
    return (
        <div style={styles.container}>
            <Header />
            <div className="mt-46 m-16 ">
                <h1 style={styles.code}>404</h1>
                <p style={styles.text}>Page not found</p>
                <p>Sorry, we couldn't find the page you're looking for.</p>
                <Link href="/" style={styles.link}>Go back to homepage</Link>
            </div>
            <Footer />
        </div>
    );
}

const styles = {
    container: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#fff",
        textAlign: "center",
    },
    code: {
        fontSize: "6rem",
        margin: 0,
    },
    text: {
        fontSize: "1.5rem",
        marginBottom: "1rem",
    },
    link: {
        marginTop: "1rem",
        color: "#0070f3",
        textDecoration: "underline",
    },
};
