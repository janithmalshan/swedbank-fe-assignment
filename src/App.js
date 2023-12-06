import EverydayBanking from "./components/EverydayBanking/EverydayBanking";
import Footer from "./components/Footer/Footer";

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Home
                </p>
            </header>
            <main className="page-content">
                <div className="page-content__wrapper">
                    <EverydayBanking/>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;
