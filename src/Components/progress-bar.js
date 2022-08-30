const ProgressBar = (props) => {
    const { bgcolor, completed, length } = props;
  
    const containerStyles = {
      height: 12,
      width: '100%',
      backgroundColor: "#7980D9",
      borderRadius: 50,
      marginBottom: 40
    }
  
    const fillerStyles = {
      height: '100%',
      width: length+"%",
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right',
      transition: 'width 1s ease-in-out'
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{/* {`${completed}%`} */}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;