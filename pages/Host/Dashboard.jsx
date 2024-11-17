import React from "react"
import { Link } from "react-router-dom"
import { BsStarFill } from "react-icons/bs"
import { getHostVans } from "../../api"

export default function Dashboard() {
 // State to store vans data, loading state, and any errors
    const [vans, setVans] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
   // Fetch vans data on component mount
    React.useEffect(() => {
        setLoading(true)
        getHostVans()
            .then(data => setVans(data)) // Set vans data on success
            .catch(err => setError(err)) // Set error on failure
            .finally(() => setLoading(false)) // Set loading to false after data fetch is done
    }, [])

   // Function to render each van's details
    function renderVanElements(vans) {
        const hostVansEls = vans.map((van) => (
            <div className="host-van-single" key={van.id}>
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
                <Link to={`vans/${van.id}`}>View</Link>
            </div>
        ))

        return (
            <div className="host-vans-list">
                <section>{hostVansEls}</section>
            </div>
        )
    }

    // if (loading) {
    //     return <h1>Loading...</h1>
    // }

    // Show error message if there’s an error
    if (error) {
        return <h1>Error: {error.message}</h1>
    }

    return (
        <>
        {/* Dashboard section showing earnings */}
            <section className="host-dashboard-earnings">
                <div className="info">
                    <h1>Welcome!</h1>
                    <p>Income last <span>30 days</span></p>
                    <h2>$2,260</h2>
                </div>
                <Link to="income">Details</Link>
            </section>

         {/* Dashboard section showing review score */}
            <section className="host-dashboard-reviews">
                <h2>Review score</h2>

                <BsStarFill className="star" />

                <p>
                    <span>5.0</span>/5
                </p>
                <Link to="reviews">Details</Link>
            </section>
        
        {/* Dashboard section displaying listed vans */}
            <section className="host-dashboard-vans">
                <div className="top">
                    <h2>Your listed vans</h2>
                    <Link to="vans">View all</Link>
                </div>
                {
        // Show loading indicator or the list of vans
                    loading && !vans
                    ? <h1>Loading...</h1>
                    : (
                        <>
                            {renderVanElements(vans)}
                        </>
                    )
                }
                {/*<React.Suspense fallback={<h3>Loading...</h3>}>
                    <Await resolve={loaderData.vans}>{renderVanElements}</Await>
                </React.Suspense>*/}
            </section>
        </>
    )
}
