import 'handsontable/dist/handsontable.full.min.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <RootLayout>
            <Component {...pageProps} />
        </RootLayout>
    );
}

export default MyApp;