import MeetupList from '../components/meetups/MeetupList'
const list = [
  {
    id: 1,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_%28Vienna%29_-_Google_Art_Project.jpg/984px-Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_%28Vienna%29_-_Google_Art_Project.jpg',
    title: 'image 1',
    address: 'Address 1',
  },
  {
    id: 2,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_%28Vienna%29_-_Google_Art_Project.jpg/984px-Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_%28Vienna%29_-_Google_Art_Project.jpg',
    title: 'image 2',
    address: 'Address 2',
  },
]
const HomePage = () => {
  return <MeetupList meetups={list} />
}

export default HomePage
