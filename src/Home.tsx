import NavBar from "./NavBar";

const Home = () => {
    return (
        <section id="home">
            <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('src/assets/heroPaint.jpg')" }}>
                <div className="absolute inset-0 bg-white/90 opacity-90 z-0"></div>
                <NavBar />
            </div>
        </section>
    );
}

export default Home