interface PropsInterface {
  children: string
}

export default function ButtonSmall(props: PropsInterface) {
  return (
    <button className="mt-8 hello bg-indigo-700 p-2 border-hidden text-md font-semibold px-6 uppercase text-white rounded-md hover:bg-indigo-500 hover:shadow-3xl w-72">
      {props.children}
    </button>
  )
}
