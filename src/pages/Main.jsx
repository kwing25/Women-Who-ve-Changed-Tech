import BioCards from "../components/BioCards";

export default function MainContent() {
    return(
        <div id="maincontent">
            <header>
                <h1>Main Content</h1>
            </header>
            <div className="cards">
                <BioCards />
            </div>
        </div>
    )
}