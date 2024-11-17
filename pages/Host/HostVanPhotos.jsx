import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanPhotos() {
// Get the current van data from the outlet context
    const { currentVan } = useOutletContext()
    return ( 
// Display the van's image
        <img src={currentVan.imageUrl} className="host-van-detail-image" />
    )
}