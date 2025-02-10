import MainSlider from "./main/main.slider";
import { Container } from "@mui/material";

export default async function HomePage() {

  const res = await fetch("http://localhost:8000/api/v1/tracks/top", {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      category: "CHILL",
      limit: 10
    })
  })

  console.log("Check res", await res.json())
  return (
    <Container>
      <MainSlider />
      <MainSlider />
      <MainSlider />
    </Container>
  );
}
