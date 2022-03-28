import allArticles from '../Data/articles'
import Article from './Article'

function Articles(props) {
    return (
        <section className='container articles flex'>
            {allArticles.map((info) => (
                <Article key={info.title} {...info} />
            ))}
        </section>
    )
}

export default Articles;