const searchBody ={
    passengers: [
        {
            type: "ADT",
            count: 1,
            ages: []
        },
        {
            type: "CNN",
            count: 0,
            ages: []
        },
        {
            type: "INF",
            count: 0,
            ages: []
        }
    ],
    cabin: null,
    tripType: "oneway",
    vendorPref: [],
    studentFare: false,
    umrahFare: false,
    seamanFare: false,
    laborFare: false,
    segmentsList: [
        {
            departure: "DAC",
            arrival: "CXB",
            departureDate: "2025-08-05"
        }
    ],
    advanceSearch: false,
    classes: [],
    paxDetails: [],
    bookingId: ""
} 

export function getSearchBody() {
  return searchBody;
}
