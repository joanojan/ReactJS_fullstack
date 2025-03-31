import Part from "./Part"
import Header from "./Header"
import SumExercises from "./SumExercises"

const Course = ({ course }) => {
  const sum = course.parts.reduce(
    (sum, part) => sum + part.exercises, 0
  )

  return (
    <div>
      <Header title={course.name} />
      <ul>
        {course.parts.map(part =>
          <Part key={part.id} part={part} />
        )}
      </ul>
      <SumExercises sum={sum} />
    </div>
  )
}

export default Course