import type { NextPage } from "next";
import Title from "../../ui/components/Title/Title";
import List from "../../ui/components/List/List";

const Home: NextPage = () => {
  return (
    <div>
      <Title
        title=""
        subtitle={
          <span>
            With a small monthly fee, you <br /> can{" "}
            <strong>adopt a pet virtually</strong>
          </span>
        }
      ></Title>
      <List
        pets={[
          {
            id: 1,
            name: "Pipoca",
            history:
              "Small size. Female dog, docile and playful. Vaccine up to date. Dog with curly and colorful fur. He loves to play with his Aumiguinhos. It is available for adoption. If you are looking for a very loving and charismatic companion, this puppy will brighten your day!",
            photo:
              "https://images.pexels.com/photos/2769563/pexels-photo-2769563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
          {
            id: 2,
            name: "Luck",
            history:
              "Small size. Male, docile and playful dog. Vaccine up to date. Educated and cheerful dog. He loves to walk and play in the park. Your day to day is filled with lots of fun.",
            photo:
              "https://images.pexels.com/photos/3714060/pexels-photo-3714060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
          {
            id: 3,
            name: "Duqueza",
            history:
              "Large size. Female dog, docile and playful. Vaccine up to date.",
            photo:
              "https://images.pexels.com/photos/4749999/pexels-photo-4749999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
        ]}
      ></List>
    </div>
  );
};

export default Home;
