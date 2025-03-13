import { Button } from "@components";
import { SpurLogoV2 } from "@assets";

const FooterSection: React.FC = () => {
  return (
    <div>
      <section className="relative bg-[#050B10] to-10% px-28 py-16">
        <div className="flex">
            {/* Logo */}
            <img src={ SpurLogoV2  } className="w-1/3" />
            {/* Directory */}
            <div className="flex gap-10 w-1/3 justify-center">
                <div className="flex flex-col gap-2">
                    <h3 className="text-gradient text-2xl mb-2">About</h3>
                    <a>Our Story</a>
                    <a>Resources</a>
                    <a>News</a>
                    <a>Partners</a>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-gradient text-2xl mb-2">Contact</h3>
                    <a>Join SPUR</a>
                    <a>Become a Partner</a>
                    <a>Contact Us</a>
                </div>
            </div>
            {/* Mailing List */}
            <div className="flex flex-col gap-2 w-1/3">
                <p className="text-2xl">Join our mailing list for exclusive news</p>
                <div className="flex justify-between w-full">
                    {/* <label htmlFor="fname">First name:</label><br/> */}
                    <input type="text" id="fname" name="fname" defaultValue="Enter you email" className="pl-4 text-sm text-gray-300 border border-amber-600 rounded-full"/>
                    <Button intent="secondary">Email Me</Button>
                </div>
            </div>
        </div>
        {/* Logo & Copyright statement */}
        <div className="flex justify-between pt-24">
            <div>
                <p>Logos here</p>
            </div>
            <div className="flex gap-16">
                <p>© 2025 SPUR Innovation. Konfer Inc. All rights reserved</p>
                <p>Privacy Policy</p>
                <p>Terms and Conditions</p>
            </div>
        </div>
      </section>
    </div>
  );
};

export { FooterSection };
