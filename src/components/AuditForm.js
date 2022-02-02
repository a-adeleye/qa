import React from "react";
import AgentDetails from "./AgentDetails";
import AuditDetails from "./AuditDetails";




function AuditForm() {
  function handleSubmit() {
    console.log("formData");
  }

  return (
    <form className="auditForm" onSubmit={handleSubmit}>
      <AgentDetails />
      <AuditDetails />
    </form>
  );
}

export default AuditForm;
