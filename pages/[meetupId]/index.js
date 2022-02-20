import { MongoClient, ObjectId } from 'mongodb'
import MeetupDetail from '../../components/meetups/MeetupDetail'

const MeetupDetails = ({ meetupData }) => {
  return (
    <MeetupDetail
      id={meetupData._id}
      image={meetupData.image}
      title={meetupData.title}
      address={meetupData.address}
    />
  )
}

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://taskapp:zGkQpmbAB7JB7j0l@cluster0.yhom9.mongodb.net/meetups?retryWrites=true&w=majority'
  )
  const db = client.db()
  const meetupsCollections = db.collection('meetups')
  const meetups = await meetupsCollections.find().toArray()

  return {
    fallback: true,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  }
}

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId

  const client = await MongoClient.connect(
    'mongodb+srv://taskapp:zGkQpmbAB7JB7j0l@cluster0.yhom9.mongodb.net/meetups?retryWrites=true&w=majority'
  )
  const db = client.db()
  const meetupsCollection = db.collection('meetups')
  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  })
  client.close()
  console.log(selectedMeetup)
  return {
    props: {
      meetupData: {
        ...selectedMeetup,
        _id: selectedMeetup._id.toString(),
      },
    },
  }
}

export default MeetupDetails
