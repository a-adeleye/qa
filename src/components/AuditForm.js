import React from "react";
import AGENTS from "./Agents";
import INTERACTIONTYPES from "./InteractionTypes"
import AUDITCATEGORIES from "./AuditCategories"
import uniqid from "uniqid";


function AgentID(props) {
  const options = props.agents.map((agent) => (
    <option key={uniqid()} value={agent.id}>
      {agent.id}
    </option>
  ));

  return (
    <select
      id="agentId"
      name="agentId"
      value={props.agentId}
      onChange={props.handleChange}
      required
    >
      <option>...Select agent...</option>
      {options}
    </select>
  );
}

function AgentDetails() {
  const [agentId, setAgentId] = React.useState("");

  function handleChange(e) {
    setAgentId((prevValue) => e.target.value);
  }

  const currentAgent = AGENTS.filter((ag) => ag.id === agentId);
  const validSelection = currentAgent.length !== 0;
  const agentName = validSelection && currentAgent[0].name;
  const teamLead = validSelection && currentAgent[0].teamLead;
  const segment = validSelection && currentAgent[0].segment;

  return (
    <fieldset>
      <legend className="legend">Agent Details</legend>
      <p className="fieldset--level">AgentID:</p>
      <AgentID agents={AGENTS} agentId={agentId} handleChange={handleChange} />
      <p className="fieldset--level">Agent Name:</p>
      <p className="fieldset--level--value">{agentName}</p>
      <p className="fieldset--level">Segment:</p>
      <p className="fieldset--level--value">{segment}</p>
      <p className="fieldset--level">Team Lead:</p>
      <p className="fieldset--level--value">{teamLead}</p>
    </fieldset>
  );
}

function InteractionTypes(props) {
  const options = props.types.map((type) => (
    <option key={uniqid()} value={type}>
      {type}
    </option>
  ));

  return (
    <select
      id="interactionType"
      name="interactionType"
      value={props.interaction}
      onChange={props.handleChange}
    >
      <option>...Select type...</option>
      {options}
    </select>
  );
}

function AuditDetails() {
  const [interaction, setInteraction] = React.useState({
    interactionType: "",
    callDetails: " ",
    messageURL: " ",
    ticketId: " ",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setInteraction((prevValue) => ({ ...interaction, [name]: value }));
  }

  return (
    <fieldset>
      <legend className="legend">Audit Details</legend>
      <p className="fieldset--level">Interaction Type:</p>
      <InteractionTypes
        types={INTERACTIONTYPES}
        interaction={interaction.interactionType}
        handleChange={handleChange}
      />
      <p className="fieldset--level">
        {interaction.interactionType === "Call"
          ? "Call details"
          : "Message URL"}
        :
      </p>
      <input
        type="text"
        name={
          interaction.interactionType === "Call" ? "callDetails" : "messageURL"
        }
        value={interaction.details}
        onChange={handleChange}
      ></input>
      <p className="fieldset--level">Ticket ID:</p>
      <input
        type="text"
        name="ticketId"
        value={interaction.ticketId}
        onChange={handleChange}
      ></input>
    </fieldset>
  );
}

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
