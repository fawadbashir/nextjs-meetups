import NewMeetupForm from '../../components/meetups/NewMeetupForm'

const NewMeetup = () => {
  const addMeetup = async (data) => {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const resData = await response.json()

    console.log(resData)
  }

  return <NewMeetupForm onAddMeetup={addMeetup} />
}

export default NewMeetup
