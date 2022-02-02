import uniqid from "uniqid";

const INTERACTIONTYPES = [
    "Facebook",
    "Call",
    "Chat",
    "Email",
    "SMS",
    "Twitter",
    "Whatsapp",
  ];

  export function InteractionTypes(props) {
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

  export default INTERACTIONTYPES