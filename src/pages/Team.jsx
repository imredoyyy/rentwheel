// Component
import Container from "../Layout/Container";
import Pagination from "../components/Pagination";

// Team Data
import { TeamMemberData } from "../data/TeamData";

const Team = () => {
  return (
    <>
      <Pagination name="Team" />
      <Container className="mt-6">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-center text-xl font-medium text-color-50">
              Our Team
            </h3>
            <h1 className="text-center text-3xl font-bold lg:text-3xl">
              Meet Our Exceptional Team Members
            </h1>
            <p className="max-w-[400px] text-center text-base font-normal text-color-200">
              Get to Know Our Exceptional and Dedicated Team - Meet the Faces
              Driving Our Success
            </p>
          </div>

          <div className="grid grid-cols-1 place-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-12">
            {TeamMemberData.map((member, index) => (
              <div
                className="flex w-fit flex-col rounded-2xl bg-neutral-100 shadow-md ring-black"
                key={index}
              >
                <div className="max-w-[300px]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-2xl"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col items-center gap-2 px-8 py-6">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-base font-medium text-color-50">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Team;
