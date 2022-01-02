import './Home.css'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <header className="Home-background">
                <div className="Welcome">WanderGram</div>
                <div className="Tagline">Eat. Sleep. Travel. Repeat.</div>
                <div className="ActionButtons">
                    <Link to="/create" className="PostActionButton">Create a new Post</Link>
                    <Link to="/explore" className="PostActionButton RightAction">Start exploring all posts</Link>
                </div>
            </header>
        </div>
    )
}

export default Home