import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanPricing() {
 // Get the current van data from the outlet context
    const { currentVan } = useOutletContext()
    return (
// Display the van's pricing information
        <h3 className="host-van-price">${currentVan.price}<span>/day</span></h3>
    )
}