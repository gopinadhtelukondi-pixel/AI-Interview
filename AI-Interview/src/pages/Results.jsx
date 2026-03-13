import MainLayout from "../layouts/MainLayout";
import Card from "../components/UI/Card";

function Results() {
  return (
    <MainLayout>

      <h2 className="text-3xl font-bold mb-8 text-center">
        Interview Results
      </h2>

      <Card>

        <p>Technical Score: 8 / 10</p>
        <p>Communication Score: 7 / 10</p>

        <p className="text-green-400 mt-4">
          Good explanation but improve clarity.
        </p>

      </Card>

    </MainLayout>
  );
}

export default Results;