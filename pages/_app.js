import Link from 'next/link';
import 'react-awesome-slider/dist/styles.css';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
    return (
        <>
            <nav>
                <Link href="/">Главная</Link>
                <Link href="/content">Слайдер</Link>
                <Link href="/shops">Зоомагазины</Link>
            </nav>

            <Component {...pageProps} />
        </>
    );
}