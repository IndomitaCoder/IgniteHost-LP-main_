import s from "./Features.module.css";
import { SvgElectricity, SvgFirewall, SvgHardDisk, SvgSpeed } from "assets/svg";

const Features = () => {
  return (
    <div className={s.root}>
      <p className="font-space-grotesk font-bold text-2xl text-[#aaa]">
        VIRTUAL PRIVATE HOSTING FEATURES
      </p>
      <p className="font-space-grotesk font-bold text-4xl mt-10">
        Our Hosting Infrastructure
      </p>
      <div className="w-[95%] xl:w-[80%] flex items-start justify-center pt-20 gap-8">
        <div className="w-1/4 flex flex-col items-center">
          <SvgElectricity className="mb-4 w-[70px] h-[70px] xl:w-[100px] xl:h-[100px]" />
          <p className="font-space-grotesk font-bold text-xl xl:text-2xl">
            Fast & Reliable
          </p>
          <p className="font-space-grotesk font-bold text-xl text-center mt-12 leading-6">
            Each VPS runs on dedicated servers with the latest AMD EPYC CPUs
            ensuring ample processing power for any medium or large-scale online
            projects.
          </p>
        </div>
        <div className="w-1/4 flex flex-col items-center">
          <SvgHardDisk className="mb-4 w-[70px] h-[70px] xl:w-[100px] xl:h-[100px]" />
          <p className="font-space-grotesk font-bold text-xl xl:text-2xl">
            Encrypted Hard Drives
          </p>
          <p className="font-space-grotesk font-bold text-xl text-center mt-12 leading-6">
            Our hard drives are strongly encrypted to ensure data
            confidentiality, keeping all the sensitive files you have safe from
            unauthorized access.
          </p>
        </div>
        <div className="w-1/4 flex flex-col items-center">
          <SvgSpeed className="mb-4 w-[70px] h-[70px] xl:w-[100px] xl:h-[100px]" />
          <p className="font-space-grotesk font-bold text-xl xl:text-2xl">
            Unlimited Bandwidth
          </p>
          <p className="font-space-grotesk font-bold text-xl text-center mt-12 leading-6">
            With up to 1000 MBPS with a delay of 10ms, we ensure to always have
            your data transferred in time. With up to 10000 MBPS on offshore.
          </p>
        </div>
        <div className="w-1/4 flex flex-col items-center">
          <SvgFirewall className="mb-4 w-[70px] h-[70px] xl:w-[100px] xl:h-[100px]" />
          <p className="font-space-grotesk font-bold text-xl xl:text-2xl">
            AI Powered Firewall
          </p>
          <p className="font-space-grotesk font-bold text-xl text-center mt-12 leading-6">
            Our AI powered firewall utilizes machine learning techniques block
            malicious activity in real time offering an extra layer of security.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
