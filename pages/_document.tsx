import Document, { Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
    render() {
        return (
            <html>
            <Head>
                <title>document</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
            </Head>
            <body>
            <div className="container">
                <Main/>
            </div>
            <NextScript/>
            </body>
            </html>


        );
    }
}


export default CustomDocument;