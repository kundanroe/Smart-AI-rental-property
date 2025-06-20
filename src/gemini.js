import { prevUser } from "./context/UserContext";

const Api_Url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBHVPnYlul9ollBJ1f0ms8PfTPxxb4BCUU";

export async function generateResponse() {
  const contents = [
    {
      parts: [
        { text: prevUser.prompt },
        ...(prevUser.data
          ? [
              {
                inline_data: {
                  mime_type: prevUser.mime_type,
                  data: prevUser.data,
                },
              },
            ]
          : []),
      ],
    },
  ];

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ contents }),
  };

  try {
    const response = await fetch(Api_Url, requestOptions);
    const data = await response.json();
    const apiResponse = data.candidates[0].content.parts[0].text
      .replace(/\*\*(.*?)\*\*/g, "$1")
      .trim();
    return apiResponse;
  } catch (error) {
    console.error("API Error:", error);
    return "Error generating response.";
  }
}
