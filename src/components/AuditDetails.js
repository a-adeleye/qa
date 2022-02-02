import React from "react";
import INTERACTIONTYPES, {InteractionTypes} from "./InteractionTypes"

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

  export default AuditDetails