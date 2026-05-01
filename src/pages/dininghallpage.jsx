import { useState, useEffect } from "react"
import { Pages } from "../constants/pages"

function LocationsPanel({setPanel, locations:{choices,setAmount}}) {
    const [listoflocs, setlistoflocs] = useState("")

    async function handleLocations(e) {
        if (listoflocs.length === 0) {
            SpeechSynthesisErrorEvent("yo you gotta select a location my user")
            setSelectedLocations(false)
            return
        }
    }
    return (
        <form id="dropdownform">
            <label>
            <select>
                <option selection disable>Choose the dining locations!</option>
                <option value="1">bplate</option>
                <option value="2">feast</option>
                <option value="3">de neve</option>
                <option value="4">bcafe</option>
                <option value="5">cafe 1919</option>
                <option value="6">epicuria</option>
                <option value="7">rendezvous</option>
                <option value="8">the study</option>
            </select>
            </label>
            <label>
                <select>
                    <option selection disable>
                        Choose the hours!
                    </option>
                    <option value="1">breakfast</option>
                    <option value="2">lunch</option>
                    <option value="3">dinner</option>
                    <option value="4">late night</option>
                </select>
            </label>
            <button type="submit">press this to update boss</button>
        </form>
    )
}