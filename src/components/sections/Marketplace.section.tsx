import { Button, CardComponent } from "@components";

const MarketplaceSection: React.FC = () => {
  return (
    <div>
      <section className="relative w-full h-screen bg-gradient-to-tr from-[#F59047]/70 via-[#2C2C2F]/40 to-[#0B1219] flex justify-center items-center">
        <div className="flex flex-col w-1/2 gap-32 p-42">
          <div>
            <div className="flex gap-5 leading-relaxed text-6xl">
              <h1 className="text-gradient">Onboard</h1>
              <h1 className="text-gradient">by</h1>
              <h1 className="text-gradient">SPUR</h1>
            </div>
            <div className="flex gap-5 -mt-5 text-6xl">
              <h1 className="text-gradient-reverse">Featured</h1>
              <h1 className="text-gradient-reverse">Projects</h1>
            </div>
            <p className="my-10">
              SPUR lorem ipsum odor amet, consectetuer adipiscing elit. Dictum
              convallis nostra vel dui diam. Curabitur ex nunc quis sit. Itc
              vitae feugiat tristique, nibh velit suscipit nulla, sit amet
              suscipit diam magna ut nunc.
            </p>
            <Button intent="secondary">Investment Portal</Button>
          </div>
          <div>
            <h2 className="text-white">SPUR Innovation Fund</h2>
            <p>
              Placerat maecenas aliquam primis duis viverra integer. Vehicula
              nulla bibendum facilisis per quis vehicula risus donec euismod.
              Curabitur aliquet sem vel fermentum lacinia. Aliquam sodales neque
              lorem, aliquam luctus tellus viverra ut.
            </p>
          </div>
        </div>
        {/* Card slide deck */}
        <div className="relative w-1/2">
          <CardComponent />
        </div>
      </section>
    </div>
  );
};

export { MarketplaceSection };
