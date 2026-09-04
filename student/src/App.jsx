import './App.css'

function Student({ name, course, college }) {
  return (
    <article className="student-card">
      <h2>{name}</h2>
      <p><strong>Course:</strong> {course}</p>
      <p><strong>College:</strong> {college}</p>
    </article>
  )
}

function App() {
  return (
    <main className="profile-page">
      <header className="profile-header">
        <p className="eyebrow">Student directory</p>
        <h1>Student Profiles</h1>
        <p>Meet the students shaping tomorrow through learning and curiosity.</p>
      </header>

      <section className="student-grid" aria-label="Student profiles">
        <Student
          name="Aarav Sharma"
          course="Bachelor of Computer Applications"
          college="University of Delhi"
        />
        <Student
          name="Diya Patel"
          course="Bachelor of Business Administration"
          college="Maharaja Sayajirao University"
        />
      </section>
    </main>
  )
}

export default App
