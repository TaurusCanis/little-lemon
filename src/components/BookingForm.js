import {useState,useReducer} from "react";
import {fetchAPI, submitAPI} from "./bookingAPI";
import {useNavigate} from "react-router-dom";

export function updateTimes(state, action) {
	switch(action.type) {
		case 'change_date': {
			const newDate = new Date(action.date + "T17:00:00Z");
			const times = fetchAPI(newDate);
		
			return {
				date: newDate,
				times: times
			};
		}	
	}
	throw Error('Unknown action: ' + action.type);
}
        
export function initializeTimes() {
	const today = new Date();
        return { date: today, times: fetchAPI(today) };
}


export default function BookingForm(props) {
	const navigate = useNavigate();

        const [availableTimes, dispatch] = useReducer(updateTimes, {}, initializeTimes); 
	const [formFields, setFormFields] = useState({
		"res-date": new Date().toISOString().split("T")[0],
		"res-time": "",
		"guests": "1",
		"occasion": ""
	});

	const handleFieldChange = (e) => {
		setFormFields({
			...formFields,
			[e.target.id]: e.target.value
		});
		
		dispatch({type: 'change_date', date: e.target.value});
	}
	
	
	function submitForm(e) {
		e.preventDefault();
		if (submitAPI(formFields)) navigate("confirmed");
		return;
	}
	
	return (
		<form data-testid="booking-form" onSubmit={submitForm}>
			<label htmlFor="res-date">Choose Date</label>
			<input onChange={handleFieldChange} type="date" id="res-date" value={formFields['res-date']} />
			<label htmlFor="res-time">Choose Time</label>
			<select id="res-time" data-testid="res-time" onChange={(e) => setFormFields({ ...formFields, 'res-time': e.target.value })}>
				{ availableTimes.times.map(at => (
					<option key={at} value={at}>{at}</option>
				))}
			</select>		
			<label htmlFor="guests">Number of Guests</label>
			<input type="number" placeholder="1" min="1" max="10" id="guests" />
			<label htmlFor="occasion">Occasion</label>
			<select id="occasion">
				<option>Birthday</option>
				<option>Anniversay</option>
			</select>	
			<input type="submit" value="Book Now" />
		</form>
	);
}
