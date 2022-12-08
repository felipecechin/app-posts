interface IInputGroupProps {
    label: string
    placeholder: string
}

function InputGroup({ label, placeholder }: IInputGroupProps): JSX.Element {
    return (
        <div className='space-y-1'>
            <label>{label}</label>
            <input
                className='w-full border border-text-color p-2 rounded-md focus:border-transparent focus:outline-none focus:ring-2 focus:ring-text-gradient'
                placeholder={placeholder}
                type='text'
            />
        </div>
    )
}

export default InputGroup
