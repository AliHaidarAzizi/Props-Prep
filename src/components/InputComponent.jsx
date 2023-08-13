function InputComponent({countProps, onChangeProps}) {
    return (
      <input type='text' value={countProps} onChange={onChangeProps}/>
      
    )
  }

export default InputComponent;