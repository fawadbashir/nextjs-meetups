import { MongoClient } from 'mongodb'
import MeetupList from '../components/meetups/MeetupList'
// const list = [
//   {
//     id: 1,
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_%28Vienna%29_-_Google_Art_Project.jpg/984px-Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_%28Vienna%29_-_Google_Art_Project.jpg',
//     title: 'image 1',
//     address: 'Address 1',
//   },
//   {
//     id: 2,
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_%28Vienna%29_-_Google_Art_Project.jpg/984px-Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_%28Vienna%29_-_Google_Art_Project.jpg',
//     title: 'image 2',
//     address: 'Address 2',
//   },
// ]

export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://taskapp:zGkQpmbAB7JB7j0l@cluster0.yhom9.mongodb.net/meetups?retryWrites=true&w=majority'
  )
  const db = client.db()
  const meetupsCollection = db.collection('meetups')

  const meetups = await meetupsCollection.find().toArray()
  client.close()

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
  }
}
const HomePage = ({ meetups }) => {
  return <MeetupList meetups={meetups} />
}

export default HomePage
