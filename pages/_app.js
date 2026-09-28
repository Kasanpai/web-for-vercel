import Link from 'next/link';
import 'react-awesome-slider/dist/styles.css';

export default function App({ Component, pageProps }) {
    return (
        <>
            <nav
                style={{
                    display: 'flex',
                    gap: '20px',
                    padding: '15px',
                    borderBottom: '1px solid black'
                }}
            >
                <Link href="/">Главная</Link>

                <Link href="/content">
                    Слайдер
                </Link>

                <Link href="/shops">
                    Зоомагазины
                </Link>
            </nav>

            <Component {...pageProps} />
        </>
    );
}