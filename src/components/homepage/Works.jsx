import onlinestore247 from "/src/assets/images/onlinestore247.webp";
import starspin from "/src/assets/images/starspin.webp";
import smartpay from "/src/assets/images/smartpay.webp";
import sgvis from "/src/assets/images/sgvis.webp";
import sunnyside from "/src/assets/images/sunnyside-desktop.webp";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%]"
    >
     <Heading title="Projects" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Project #1 */}
        <div className=" col-span-1 md:col-span-12">
          <Projects
            link="https://onlinestore247.com/"
            img={onlinestore247}
            alt="Onlinestore247 Ecommerce website"
            name="Onlinestore247 Ecommerce website"
            type="Frontend Development"
            year="2023"
            tools="NextJs • Scss"
          />
        </div>
        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link="https://star-spin.sapporo-starguide.com/"
            img={starspin}
            alt="Starspin Sapporo Landing Page"
            name="Starspin Sapporo Landing Page"
            type="Frontend Development"
            year="2023"
            tools="HTML • CSS • JavaScript • GSAP"
          />
        </div>
        {/* Project #3 */}
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <Projects
            link="https://www.smartpayvn.com/"
            img={smartpay}
            alt="Smartpay Viet Nam Webstite"
            name="Smartpay Viet Nam Webstite"
            type="Frontend Development"
            year="2023"
            tools="HTML • CSS • JavaScript • Wordpress"
          />
        </div>
        {/* Project #4 */}
        <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
          <Projects
            link="https://thamdinhgiabatdongsan.vn/"
            img={sgvis}
            alt="SGIIC Landing Page Website"
            name="SGIIC Landing Page Website"
            type="Frontend Development"
            year="2023"
            tools="HTML • CSS • JavaScript • Wordpress"
          />
        </div>
        {/*/!* Project #5 *!/*/}
        {/*<div className="col-span-1 h-fit md:col-span-4">*/}
        {/*<Projects*/}
        {/*    link="https://sunnysidechallenge.netlify.app"*/}
        {/*    img={dad}*/}
        {/*    alt="sunnyside project mockup"*/}
        {/*    name="SUNNYSIDE LANDING PAGE"*/}
        {/*    type="Frontend Development"*/}
        {/*    year="2022"*/}
        {/*    tools="HTML • TailwindCSS • JavaScript"*/}
        {/*  />*/}
        {/*</div>*/}
      </div>
    </section>
  );
}
