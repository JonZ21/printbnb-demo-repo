import Stats from "@components/Stats";
import CardHolder from "@components/CardHolder";

const Home = () => (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      Your Premier Online {"\n"}
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center">
        3D Printing Marketplace
      </span>
    </h1>
    <p className="desc text-center">
      printbnb is a student-centered 3D Printing community for modern world
      {"\n"}
      <span className="text-gray-300">(no bed or breakfast provided)</span>
    </p>

    <Stats />
    <CardHolder />
  </section>
);

export default Home;
