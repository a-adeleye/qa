import React from "react";
import AGENTS from "./Agents";
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

  export default AgentDetails