import { useState } from "react";
function Sode() {
    const [showHtml, setShowHtml] = useState(false);
    
      const handleClick = () => {
        setShowHtml(!showHtml);
      };
    
      const htmlCode = `
        
          
          <h3>Help!</h3>
          <p>Do you have a problem? Just use this <a href="#">contact form</a>.</p>
      
      `;
  return (
    <>
      <input type="checkbox"  onClick={handleClick} name="t-help" defaultChecked={true} id="t-help" ></input>
      <input type="checkbox" name="t-success" id="t-success"defaultChecked={true}></input>
      <input type="checkbox" name="t-warning" id="t-warning"defaultChecked={true}></input>
      <input type="checkbox" name="t-error" id="t-error" defaultChecked={true}></input>
      <div className="toast-panel">
        <div className="toast-item help">
          <div className="toast help">
            <label htmlFor="t-help" className="close"></label>
            <div dangerouslySetInnerHTML={{ __html: htmlCode }}/>
          </div>
        </div>
        <div className="toast-item success">
          <div className="toast success">
            <label htmlFor="t-success" className="close"></label>
            <h3>Success!</h3>
            <p>Your message has been sent successfully.</p>
          </div>
        </div>
        <div className="toast-item warning">
          <div className="toast warning">
            <label htmlFor="t-warning" className="close"></label>
            <h3>Warning!</h3>
            <p>Sorry, there was a problem with your request.</p>
          </div>
        </div>
        <div className="toast-item error">
          <div className="toast error">
            <label htmlFor="t-error" className="close"></label>
            <h3>Error!</h3>
            <p>Change a few thing up and try submitting again.</p>
          </div>
        </div>
        <div className="toast-icons">
          <label htmlFor="t-help" className="toast-icon icon-help"></label>
          <label
            htmlFor="t-success"
            className="toast-icon icon-success"
          ></label>
          <label
            htmlFor="t-warning"
            className="toast-icon icon-warning"
          ></label>
          <label htmlFor="t-error" className="toast-icon icon-error"></label>
        </div>
      </div>
    </>
  );
}

export default Sode;
