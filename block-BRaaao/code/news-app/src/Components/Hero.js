function Hero(props) {
    return (
        <section className="container">
            <div className="hero flex">
                <figure className="flex-50">
                    <img src="/images/hero-img.jpg" alt="hero-img" />
                </figure>
                <div className="flex-50">
                    <h3>Welcome To News App!</h3>
                </div>
            </div>
        </section>
    )
}

export default Hero;