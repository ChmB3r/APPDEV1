import './App.css'

function App() {
  return (
    <>
      <div className="about-me-container" style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', textAlign: 'left' }}>
        
        <h1>About Me</h1>
        <p style={{ fontStyle: 'italic', color: '#666' }}>Welcome to my personal page!</p>
        
        <hr />

        <h2>Personal Information</h2>
        <ul>
          <li><strong>Full Name:</strong> JR Balmaceda</li>
          <li><strong>Course and Year:</strong> BSIS - 3</li>
          <li><strong>Fun Fact:</strong> I have a twin brother</li>
        </ul>

        <hr />

        <h2>Course Reflection</h2>
        <p style={{ lineHeight: '1.6', textAlign: 'justify' }}>
          My journey in this course has been very fun, starting right from introducing myself and building my very own GitHub portfolio. 
          One major thing I realized along the way is that my previous knowledge of GitHub was actually quite shallow. 
          Through our lessons, I learned how to use GitHub SSH and truly understand how it works behind the scenes. 
          I know that mastering these GitHub tools will benefit not only my future professional self but also my current self right now as a student. 
          Admittedly, the biggest hurdle I face every day is the lingering question of whether I will be able to survive this course and what I want my future to look like. 
          While I don't have the answers to those big questions just yet, I am taking it day by day, and I am hopeful that by the end of this course, I will be able to answer them confidently.
        </p>

      </div>
    </>
  )
}

export default App