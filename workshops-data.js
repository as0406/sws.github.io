const workshops = [
  {
    id: 'w1',
    title: 'Yoga Basics',
    date: 'April 25',
    time: '10:00 AM',
    location: 'Studio A',
    price: '$10',
    trainer: 'Sarah Johnson'
  },
  {
    id: 'w2',
    title: 'HIIT Bootcamp',
    date: 'April 26',
    time: '12:00 PM',
    location: 'Gym Hall',
    price: '$15',
    trainer: 'Michael Lee'
  },
  {
    id: 'w3',
    title: 'Pilates Flow',
    date: 'April 27',
    time: '9:00 AM',
    location: 'Studio B',
    price: '$12',
    trainer: 'Sarah Johnson'
  },
  {
    id: 'w4',
    title: 'Zumba Energy',
    date: 'April 28',
    time: '6:00 PM',
    location: 'Main Hall',
    price: '$10',
    trainer: 'John Smith'
  },
  {
    id: 'w5',
    title: 'Stretch & Strength',
    date: 'April 29',
    time: '2:00 PM',
    location: 'Gym Studio',
    price: '$15',
    trainer: 'John Smith'
  },
  {
    id: 'w6',
    title: 'Relaxation Techniques',
    date: 'April 30',
    time: '11:00 AM',
    location: 'Zen Room',
    price: '$8',
    trainer: 'Emily Davis'
  }
];

// Save to localStorage if not already saved
if (!localStorage.getItem('workshops')) {
  localStorage.setItem('workshops', JSON.stringify(workshops));
}
