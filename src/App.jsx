import './App.css'
import UserCard from './components/UserCard'
import UserInfo from './components/UserInfo'
import SocialLinkList from './components/SocialLinkList'
import UserImage from './assets/ProfilePicSquare.jpg'

function App() {
  return (
    <UserCard>
      <UserInfo
        userImage={UserImage}
        name="Jason Smith"
        location="Fresno, CA"
        quote={`"Front-End Developer and Gamer"`}
      />
      <SocialLinkList />
    </UserCard>
  )
}

export default App
