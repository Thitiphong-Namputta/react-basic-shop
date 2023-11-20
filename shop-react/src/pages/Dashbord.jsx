import LineChart from "../components/LineChart";
import Card from "react-bootstrap/Card";
export default function Dashbord() {
  return (
    <>
      <Card className="m-3 p-3">
        <LineChart />
      </Card>
    </>
  );
}
