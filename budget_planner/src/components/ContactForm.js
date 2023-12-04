import "./ContactForm.css"



const ContactForm = () => {
    return ( 
        <div className="form">
        <form>
            <label>Name</label>
            <input type='text'></input>
            <label>Email</label>
            <input type='email'></input>
            <label>Details</label>
           <textarea rows='6' placeholder="Please add your feedback here"></textarea>
           <button className="btn">Submit</button>
        </form>

        </div>
     );
}
 
export default ContactForm;