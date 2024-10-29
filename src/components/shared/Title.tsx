type TitleProps = {
    value: string
}

export default function Title({value}: TitleProps) {
  return (
    <h2 className="text-4xl font-black">{value}</h2>
  )
}
