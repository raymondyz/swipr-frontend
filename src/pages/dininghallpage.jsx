import { useState, useEffect } from "react"
import { Pages } from "../constants/pages"

function LocationsPanel({setPanel, locations:{choices,setAmount}}) {
    const [listoflocs, setlistoflocs] = useState("")

    async function handleLocations(e) {
        if (listoflocs.length == 0) {
            SpeechSynthesisErrorEvent("yo you gotta select a location my user")
            setSelectedLocations(false)
            return
        }
    }
}