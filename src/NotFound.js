import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>ERROR 404</h2>
            <p>This page cannot be found</p>
            <Link to="/">Back to HomePage</Link>
        </div>
     );
}
 
export default NotFound;