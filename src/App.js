import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useParams,
    useRouteMatch,
    useLocation,
    useHistory
} from "react-router-dom";

export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/posts">Posts</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/" component={Home} exact/>
                    
                    <Route path="/posts">
                        <Posts/>
                    </Route>

                    {/*<Route path="/posts/:id">*/}
                    {/*    <PostDetails/>*/}
                    {/*</Route>*/}

                    {/*<Route path="/users" render={(args) => {*/}
                    {/*    console.log(args);*/}
                    {/*    return <Users/>*/}
                    {/*}}>*/}

                    {/* <Route>*/}
                    {/*    <Redirect to="/"/>*/}
                    {/*</Route>*/}

                    <Route>
                        <h1>PAGE NOT FOUND</h1>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home(props) {
    console.log(props);
    return <h2>Home</h2>;
}

function Posts(props) {
    const [posts, setPosts] = React.useState([])
    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await response.json();

        setPosts(json)
    }
    React.useEffect(() => {
        fetchData();
    }, [])

    return (<div>
            <Switch>
                <Route path="/posts/:id" exact>
                    <PostDetails/>
                </Route>
                <Route>
                    <Redirect to="/posts /"/>
                </Route>

            </Switch>
            <ul>
                {posts.map(el => <Link to={`/posts/${el.id}`}>
                    <li>{el.title}-{el.id}</li>
                </Link>)}
            </ul>
        </div>
    )
}

function PostDetails(props) {
    const match = useRouteMatch();
    const {id} = useParams();
    const location = useLocation();
    const history = useHistory();
    // console.log({match, params, location});

    const [post, setPost] = React.useState()
    const fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const json = await response.json();

        setPost(json)
    }
    React.useEffect(() => {
        fetchData();
    }, [id])

    return (<div>
            <h1>Post Details</h1>
            {post && (<><h3>{post.title}</h3>-<p>{post.body}</p></>)}
            <button onClick={() => history.push(`/posts/${+id + 1}`)}>go to next post</button>
        </div>
    )
}
