import "../Edit/edit.css"
import "../Posts/post.css"

const Input = (props) => {
    const {inputType, classType, data, setData, label} = props;
    return ( 
        <>
            <label>{label}</label>
            {inputType === 'textarea' ? (
                <textarea className={classType} placeholder={data} onChange={(e) => setData(e.target.value)}/>
            ) : (
                <input type="text" placeholder={data} onChange={(e) => setData(e.target.value)}/>
            )}
            
        </>
     );
}
 
export default Input;