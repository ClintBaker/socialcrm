interface PropsInterface {
  children: string
}

export default function Button(props: PropsInterface) {
  return (
    <button className="mt-8 hello bg-indigo-700 p-4 border-hidden text-sm font-semibold px-6 uppercase text-white rounded-md">
      {props.children}
    </button>
  )
}
