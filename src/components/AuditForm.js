import React from "react";
import AgentDetails from "./AgentDetails";
import AuditDetails from "./AuditDetails";
import Audit from "./Audit"
import AUDITCATEGORIES from "./AuditCategories";




function AuditForm() {
  function handleSubmit() {
    console.log("formData");
  }

  return (
    <form className="auditForm" onSubmit={handleSubmit}>
      <AgentDetails />
      <AuditDetails />
      <Audit auditSheet={AUDITCATEGORIES}/>
    </form>
  );
}

export default AuditForm;
