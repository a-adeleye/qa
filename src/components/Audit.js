import React from "react";
import uniqid from "uniqid";

function Audit(props) {
  // const parameters = props.auditSheet.map(sheet => <p className="fieldset--level">{}</p>)

  const categories = props.auditSheet.map((sheet) => (
    <fieldset key={uniqid()} className="auditCategories">
      <legend>{sheet.category}</legend>

      {sheet.parameters.map((param) => (
        <div className="parameter"  key={uniqid()}>
          <p className="parameter-name">{param.parameter}</p>

          <select className="ratings-value">
            {param.ratings.map((rating) => (
              <option key={uniqid()}>{rating}</option>
            ))}
          </select>
          
        </div>
      ))}
    </fieldset>
  ));
  return categories;
}

/*function Audits() {

  return(
    <AuditCategory />
  )
}
*/

export default Audit;

/*

<fieldset>
        <legend>CACE</legend>
        <p className="fieldset--level">Professionalism:</p>
        <p className="fieldset--level">Issue Handling/Customer Intelligence:</p>
        <p className="fieldset--level">Knowledge and Information:</p>
        <p className="fieldset--level">Communication:</p>
        <p className="fieldset--level">Resolution:</p>
      </fieldset>


<div className="parameters">
        {sheet.parameters.map((param) => (
          <p className="parameter-name">
            <option>{param.parameter}</option>
          </p>
        ))}
      </div>

      <div className="ratings">
        {sheet.parameters.map((param) => (
          <select  className="ratings-value">
            {param.ratings.map((rating) => (
              <option>{rating}</option>
            ))}
          </select>
        ))}
      </div>



      */
