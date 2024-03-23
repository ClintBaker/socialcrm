import Button from '../utility/Button'

export default function Landing() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="container flex flex-col justify-center items-center md:p-16 p-4 text-gray-800 max-w-4xl text-center">
        <h2 className="text-4xl font-semibold ">
          Use Data to Cultivate More Meaningful{' '}
          <span className="custom-underline">Relationships</span>
        </h2>
        <p className="mt-8 text-lg">
          Social CRM empowers you to optimize your personal relationships with
          the help of data and AI. It's easy to be there for the people who
          matter most with Social CRM.
        </p>
        <Button>Supercharge your relationships</Button>
      </div>
      <div>PEOPLE FACES</div>
    </div>
  )
}
