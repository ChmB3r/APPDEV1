import { useState } from "react";

const userData = {
  name: "JR C. Balmaceda",
  avatarUrl: "https://scontent.fmnl30-3.fna.fbcdn.net/v/t39.30808-1/492007790_1402366800948609_5868372840305391039_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s200x200&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeG9dtgPw6_7HOM9asDqHbhYXe9cdlRRtupd71x2VFG26vhigidbeIUYr4fLS09CEcjpV8AvH0U9ke6AABuXSzNM&_nc_ohc=Ma6Gqryyd6MQ7kNvwGe3ns3&_nc_oc=AdqF-MtlYozAmsH6ZeOaIlf-buiu3X5owSN0z6Qlf745DPQqsXGnCC7Gb8C4E0Hrd9g&_nc_zt=24&_nc_ht=scontent.fmnl30-3.fna&_nc_gid=x1OW4IOhlvBjm71EQF9ZJg&_nc_ss=7b2a8&oh=00_AQBuAReE95kPtvlWXKZt_FQz-APxc6rqrpeX4CgD8wDvDg&oe=6A69093F", // sample avatar
  bio: "3rd-Year BSIS Student & Aspiring Front-End Developer | Focused on building clean, responsive, and user-centric web applications using modern UI technologies.",
  skills: ["CTF", "Java", "Python", "Bash", "HTML", "CSS", "JS", "PHP", "SQL"],
  isOnline: true,
  lastUpdated: "1 minute ago",
};

function UserProfileCard({ user }) {
  const [messageCount, setMessageCount] = useState(0);
  const [isFavorited, setFavorite] = useState(false);

  function handleSendMessage() {
    setMessageCount(messageCount + 1);
  }

  function handleReset() {
    setMessageCount(0);
  }

  function handleFavorite() {
    setFavorite(!isFavorited)
  }

  return (
    <div className="profile-card">
      <img src={user.avatarUrl} />
      <h2>{user.name}</h2>
      <label htmlFor="bio">Bio</label>
      <p id="bio">{user.bio}</p>
      <h3>Skills</h3>
      <ul>
        {user.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      <div style={{ color: "blue", fontWeight: "bold" }}>
        Messages sent: {messageCount}
      </div>
      {user.isOnline ? <span>🟢 Online</span> : <span>⚪ Offline</span>}
      <button onClick={handleSendMessage}>Send Message</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleFavorite}>
        {user.isOnline && (
        isFavorited ? <span>★ Favorited</span> : <span>☆ Favorite</span>
        )}
      </button>
      <p className="footer">Card last updated: {user.lastUpdated}</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <UserProfileCard user={userData} />
    </div>
  );
}