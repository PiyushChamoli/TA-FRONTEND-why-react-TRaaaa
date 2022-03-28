import Header from './Header'
import Hero from './Hero'
import Articles from './Articles'
import Footer from './Footer'

function App(props) {
    return (
        <>
        < Header />
        <main>
            < Hero />
            < Articles />
        </main>
        < Footer />
        </>
    )
}

export default App