import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanInfo() {
// Get the current van data from the outlet context
    const { currentVan } = useOutletContext()
    
    return (
        <section className="host-van-detail-info">
  {/* Display the van details */}
            <h4>Name: <span>{currentVan.name}</span></h4>
            <h4>Category: <span>{currentVan.type}</span></h4>
            <h4>Description: <span>{currentVan.description}</span></h4>
            <h4>Visibility: <span>Public</span></h4>
        </section>
    )
}