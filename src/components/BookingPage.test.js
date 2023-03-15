import { render, screen } from "@testing-library/react";
import Booking from "./BookingPage";
import { initializeTimes, updateTimes } from "./BookingForm";

test('initializeTimes function', () => {
	expect(initializeTimes().times.length).toBeGreaterThanOrEqual(0);
});

test('updateTimes function', () => {
	expect(updateTimes({date: "2023-03-15", times: []}, {type: 'change_date', date: "2023-03-17"}).times.length).toBeGreaterThanOrEqual(0);
});
