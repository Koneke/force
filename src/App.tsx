import { Card } from "./card";
import "./App.css";

function App() {
  console.log("bing");
  return (
    <div className="wrapper">
      <Card
        color="black"
        cost={3}
        constructionCost={2}
        name="Bingus"
        rules={[
          {
            type: "labeled",
            label: "Trigger",
            text: "When this card is played, sacrifice another creature.",
          },
        ]}
      />
      <Card
        color="red"
        cost={3}
        constructionCost={2}
        name="Bingus"
        rules={[
          {
            type: "plain",
            text: "This card cannot be targeted if you have 3 or more cards in your graveyard",
          },
          {
            type: "flavor",
            text: "Bingus usually lives in peace, a gentle creature. Until scorned.",
          }
        ]}
      />
      <Card
        color="yellow"
        cost={3}
        constructionCost={2}
        name="Bingus"
        rules={[]}
      />
      <Card
        color="green"
        cost={3}
        constructionCost={2}
        name="Bingus"
        rules={[]}
      />
    </div>
  );
}

export default App;
