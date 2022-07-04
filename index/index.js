function Page() {
    return (
        <div>
            <Header />
            <Contents />
            <Footer />
        </div>
    );
}

ReactDOM.render(<Page />, document.getElementById("root"));
