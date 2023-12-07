import EverydayBanking from "./components/EverydayBanking/EverydayBanking";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {

    return (
        <div className="App">
            <Header />
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
