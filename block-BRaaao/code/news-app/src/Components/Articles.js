import allArticles from '../Data/articles'

function Articles(props) {
    return (
        <section className='container articles flex'>
            {allArticles.map((info) => (
                <Article key={info.title} {...info} />
            ))}
        </section>
    )
}

function Article(props) {
    return (
        <div className='flex-30 card'>
            <div className='card-img'>
                <img src={props.urlToImage} alt={props.description} />
            </div>
            <div className='card-info'>
                <h2>{props.title}</h2>
                <h3>{props.author}</h3>
                <a href={props.url}>Read More!</a>
            </div>
        </div>
    )
}

export default Articles;