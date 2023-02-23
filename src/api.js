import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID Qne08sRrODT6pr4aMTw-kcBt5dDfr1BJVSMnu4vivGU",
    },
    params: {
      query: term,
    },
  });
  // console.log(response.data.results);
  return response.data.results;
};

export default searchImages;
