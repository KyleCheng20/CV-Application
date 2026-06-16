function Field({ labelName, id, name, type, placeholder="", value, onChange}) {
    return (
        <div className="field">
            <label htmlFor={id}>{labelName}</label>
            <input
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange} 
             />
        </div>
    )
}

export default Field;