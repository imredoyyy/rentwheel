import { Link } from "react-router-dom";

// Component
import Container from "../Layout/Container";

const Pagination = ({ name }) => {
  return (
    <>
      <section className="bg-pagination relative -mt-[5rem] h-[24rem] w-full bg-cover bg-[50%] bg-no-repeat">
        <div className="absolute right-0 top-0 h-full w-full bg-white/90"></div>
        <Container>
          <div className="relative z-[5] mt-[6rem] flex flex-col gap-4">
            <h3 className="text-4xl font-bold">{name}</h3>
            <div className="flex items-center">
              <Link to="/" className="text-xl font-semibold">Home /</Link>&nbsp;
              <span className="text-xl font-semibold">{name}</span>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Pagination;
