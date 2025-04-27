const workshops = [
  {
    id: "w1",
    title: "Yoga Basics",
    date: "April 25",
    time: "10:00 AM",
    location: "Studio A",
    price: "$10",
    trainer: "Sarah Johnson",
    trainerEmail: "sarah@example.com",
    capacity: 10,
    status: "Open",
    participants: []
  },
  {
    id: "w2",
    title: "HIIT Bootcamp",
    date: "April 26",
    time: "12:00 PM",
    location: "Gym Hall",
    price: "$15",
    trainer: "Mike Lee",
    trainerEmail: "mike@example.com",
    capacity: 8,
    status: "Open",
    participants: []
  },
  {
    id: "w3",
    title: "Pilates Flow",
    date: "April 27",
    time: "9:00 AM",
    location: "Studio B",
    price: "$12",
    trainer: "Sarah Johnson",
    trainerEmail: "sarah@example.com",
    capacity: 12,
    status: "Open",
    participants: []
  },
  {
    id: "w4",
    title: "Zumba Energy",
    date: "April 28",
    time: "6:00 PM",
    location: "Main Hall",
    price: "$10",
    trainer: "Linda White",
    trainerEmail: "linda@example.com",
    capacity: 15,
    status: "Open",
    participants: []
  },
  {
    id: "w5",
    title: "Stretch & Strength",
    date: "April 29",
    time: "2:00 PM",
    location: "Gym Studio",
    price: "$14",
    trainer: "Sarah Johnson",
    trainerEmail: "sarah@example.com",
    capacity: 10,
    status: "Open",
    participants: []
  },
  {
    id: "w6",
    title: "Relaxation Techniques",
    date: "April 30",
    time: "11:00 AM",
    location: "Zen Room",
    price: "$8",
    trainer: "Mike Lee",
    trainerEmail: "mike@example.com",
    capacity: 8,
    status: "Open",
    participants: []
  }
];

// Save into localStorage if it doesn't already exist
if (!localStorage.getItem('workshops')) {
  localStorage.setItem('workshops', JSON.stringify(workshops));
}
