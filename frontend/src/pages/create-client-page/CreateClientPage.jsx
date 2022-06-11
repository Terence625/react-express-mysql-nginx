import React from 'react'

export const CreateClientPage = () => {
  const [formText, setFormText] = useState({ name: "", phone: "", email: "" });
  const [clientId, setClientId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <div>CreateClientPage</div>
  )
}
