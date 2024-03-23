import AuthForm from './AuthForm'

export default function Auth() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="container flex flex-col justify-center items-center h-[500px] ">
        <h2 className="text-4xl font-semibold w-72">
          Supercharge Your Relationships
        </h2>
        <h3 className="mt-8 text-xl mb-8 w-72">Let's get started!</h3>
        <AuthForm />
      </div>
    </div>
  )
}
