import React from "react"
import { Link, useParams, useLocation } from "react-router-dom"
import { getVans } from "../../api"

export default function VanDetail() {
// State for storing the van details, loading, and error
    const [van, setVan] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
 // Get the 'id' parameter from the URL
    const { id } = useParams()
 // Get the location object (used for back button navigation)
    const location = useLocation()

 // Fetch van details when the component mounts or 'id' changes
    React.useEffect(() => {
        async function loadVans() {
            setLoading(true) // Set loading state to true
            try {
                const data = await getVans(id) // Fetch van data using the id
                setVan(data) // Set the fetched van data
            } catch (err) {
                setError(err)  // Set error state if there is an issue fetching data
            } finally {
                setLoading(false) // Set loading to false once done
            }
        }
        loadVans()
    }, [id])
    
    if (loading) {
        return <h1>Loading...</h1>
    }
    
    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    const search = location.state?.search || "";
    const type = location.state?.type || "all";
    
    return (
        <div className="van-detail-container">
            <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to {type} vans</span></Link>
            
            {van && (
                <div className="van-detail">
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>
                        {van.type}
                    </i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            )}
        </div>
    )
}