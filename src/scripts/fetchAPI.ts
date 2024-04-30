const requestOptions = {
  method: "GET",
  headers: {
    Authorization:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBoaWEubWVkLmNvbSIsImlzcyI6IkFQSSBoaWFtZWQiLCJleHAiOjE3MTQ1MTA2MjF9.k699sBc1pp9xVdz8smTvrMYKdC4Hnfu4X6jZWJ53Bho",
  },
};
export const API = async (endpoint: string, sortBy: string) => {
  await fetch(`http://localhost:8080/${endpoint}`, requestOptions);
  try {
    const response = await fetch(
      `http://localhost:8080/${endpoint}${sortBy}`,
      requestOptions
    );
    const responseData = await response.json();
    return responseData.content;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};
