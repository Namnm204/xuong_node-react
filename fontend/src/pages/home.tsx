import { Banner, Blogs, Footer, News, Service, Shops } from "@/components";
const HomePage = () => {
  return (
    <>
      <Banner />
      <main>
        <News featured={true} />
        <Shops />
        <Blogs />
        <Service />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
