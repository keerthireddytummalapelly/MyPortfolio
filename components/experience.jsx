"use client";

import { WobbleCard } from "./ui/wobble-card";

const Experience = () => {
  return (
    <div className="container mx-auto px-4 pt-36">
      <h1 className="text-[20px] xl:text-[32px] font-bold mb-16">Experience</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="relative max-w-full">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Accenture, India : Full Stack Engineering Analyst
            </h2>

            <div className="flex ">
              <div className="flex flex-col items-center py-4">
                <span className="text-white text-sm whitespace-nowrap mb-2">
                  Dec 2022
                </span>
                <div className="h-full w-px bg-white flex-grow"></div>
                <span className="text-white text-sm whitespace-nowrap mt-2">
                  Aug 2021
                </span>
              </div>

              <div className="mb-6">
                <ul className="mt-4 text-left list-disc pl-10 text-base/6 text-neutral-200 space-y-2">
                  <li>
                    Played a key role in both frontend and backend development
                    phases of AI-powered web applications that center on
                    leveraging CRM data to orchestrate precision-targeted
                    advertising campaigns, with the objective of optimizing
                    audience reach and augmenting revenue streams.
                  </li>
                  <li>
                    Implemented user interfaces and experiences using Angular
                    framework, focusing on intuitive design and efficient user
                    interactions.
                  </li>
                  <li>
                    Developed backend services and APIs using FastAPI framework,
                    ensuring robustness, scalability, and high performance.
                  </li>
                  <li>
                    Implemented features for user authentication, authorization,
                    and data encryption to ensure data security and privacy
                    compliance.
                  </li>
                  <li>
                    Collaborated closely with data scientists and AI engineers,
                    integrating machine learning models and algorithms to
                    achieve a 15% increase in dynamic audience segmentation
                    accuracy and enabling 20% more personalized advertising
                    campaigns.
                  </li>
                  <li>
                    Successfully deployed and managed the applications on the
                    Azure platform, ensuring 99.9% uptime and leveraging its
                    scalability and reliability to handle a 500% increase in
                    user traffic.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="relative max-w-full">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Eximius Design, India : Artificial Intelligence - Intern
            </h2>

            <div className="flex ">
              <div className="flex flex-col items-center py-4">
                <span className="text-white text-sm whitespace-nowrap mb-2">
                  May 2021
                </span>
                <div className="h-full w-px bg-white flex-grow"></div>
                <span className="text-white text-sm whitespace-nowrap mt-2">
                  Sep 2020
                </span>
              </div>

              <div className="mb-6">
                <ul className="mt-4 text-left list-disc pl-10 text-base/6 text-neutral-200 space-y-2">
                  <li>
                    Specialized in enhancing face recognition with
                    state-of-the-art architectures like Faster R-CNN and YOLO,
                    achieving high accuracy with an average mAP of 85% on
                    benchmark datasets.
                  </li>
                  <li>
                    {" "}
                    Integrated the real-time object detection models in
                    surveillance systems, achieving detection and tracking
                    accuracy rates exceeding 90% in crowded environments.
                  </li>
                  <li>
                    Engaged in ongoing research and experimentation to explore
                    novel architectures and algorithms for further improving
                    detection and classification performance.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </WobbleCard>
      </div>
    </div>
  );
};

export default Experience;
