import EverydayBanking from "./components/EverydayBanking/EverydayBanking";

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
        </div>
    );
}

export default App;
