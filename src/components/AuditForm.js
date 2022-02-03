import React from "react";
import AgentDetails from "./AgentDetails";
import AuditDetails from "./AuditDetails";
import Audit from "./Audit"
import AUDITCATEGORIES from "./AuditCategories";




function AuditForm() {

  const [audit, setAudit] = React.useState({})

  function handleSubmit(e) {
    e.preventDefault()
    console.log(audit)
  }

  return (
    <form className="auditForm" onSubmit={handleSubmit}>
      <AgentDetails />
      <AuditDetails />
      <Audit auditSheet={AUDITCATEGORIES}/>
      <button className="saveAuditBtn">Save Audit</button>
    </form>
  );
}

export default AuditForm;
