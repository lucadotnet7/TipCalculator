const tipOptions = [
    {
        id: 'non-tip',
        value: 0,
        label: 'Sin propina'
    },
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
]

type TipPercentageFormProps = {
    setTip: React.Dispatch<React.SetStateAction<number>>,
    tip: number
}

export default function TipPercentageForm({setTip, tip}: TipPercentageFormProps) {
    return (
    <div>
        <h3 className="text-2xl font-black">Propina:</h3>

        <form>
            {tipOptions.map(tipOption => (
                <div key={tipOption.id} className="flex gap-2">
                    <label htmlFor={tipOption.id}>
                        {tipOption.label}
                    </label>
                    <input 
                        name="tip"
                        type="radio" 
                        id={tipOption.id}
                        value={tipOption.value} 
                        onChange={e => setTip(Number(e.target.value))}
                        checked={tipOption.value === tip}/>
                </div>
            ))}
        </form>
    </div>
    )
}
