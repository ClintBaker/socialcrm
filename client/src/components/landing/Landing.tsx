import { Link } from 'react-router-dom'
import Button from '../utility/Button'

export default function Landing() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="container flex flex-col justify-center items-center md:p-16 p-4 max-w-4xl text-center">
        <h2 className="text-4xl font-semibold ">
          Use Data to Cultivate More Meaningful{' '}
          <span className="custom-underline">Relationships</span>
        </h2>
        <p className="mt-8 text-lg">
          REL-M empowers you to optimize your personal relationships with the
          help of data and AI. It's easy to be there for the people who matter
          most with REL-M, the social relationship manager.
        </p>
        <Link to={'/auth'}>
          <Button>Supercharge your relationships</Button>
        </Link>
      </div>
    </div>
  )
}
