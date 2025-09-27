"use client";
import { cn } from "@/lib/utils";

export default function HowItWorks() {
  const steps = [
    {
      title: "Companies Register",
      description:
        "Organizations deposit funds into a secure smart contract to back their bounty programs.",
    },
    {
      title: "Users Submit",
      description:
        "All submissions and reviews are recorded on-chain for transparency and trust.",
    },
    {
      title: "Review & Verify",
      description:
        "Submissions are verified in a fair, auditable process that ensures accuracy.",
    },
    {
      title: "Rewards Released",
      description:
        "Once approved, rewards are automatically released with blockchain-backed accountability.",
    },
  ];

  return (
    <section className="w-full py-20">
      <header className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold">
          How it <span className="text-purple-500">Works</span>
        </h2>
        <p className="mt-3 text-muted-foreground text-lg">
          A transparent, fair, and decentralized process for all.
        </p>
      </header>

      <div className="relative mt-16">
        {/* Timeline line */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 border-l border-dashed border-muted"
        />

        <ol className="relative space-y-16">
          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <li
                key={i}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center"
              >
                {/* Marker */}
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 -translate-x-1/2 z-10"
                >
                  <div className="h-10 w-10 rounded-full bg-purple-500 text-white grid place-items-center font-bold shadow-lg">
                    {i + 1}
                  </div>
                </div>

                {/* Left Content */}
                <div
                  className={cn(
                    isLeft
                      ? "flex md:justify-end"
                      : "hidden md:flex md:justify-end"
                  )}
                >
                  {isLeft && (
                    <div className="w-full md:max-w-[500px] rounded-xl border border-purple-500 bg-background p-6 shadow-md md:mr-16">
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      <p className="mt-2 text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  )}
                </div>

                {/* Right Content */}
                <div
                  className={cn(
                    !isLeft
                      ? "flex md:justify-start"
                      : "hidden md:flex md:justify-start"
                  )}
                >
                  {!isLeft && (
                    <div className="w-full md:max-w-[500px] rounded-xl border border-purple-500 bg-background p-6 shadow-md md:ml-16">
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      <p className="mt-2 text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
