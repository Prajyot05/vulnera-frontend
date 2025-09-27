"use client";
import { cn } from "@/lib/utils";

export default function HowItWorks() {
  const steps = [
    {
      title: "Companies register",
      description:
        "Companies register and deposit funds into a secure smart contract to fund their bounty programs.",
    },
    {
      title: "Users Submit",
      description: "All submissions and reviews are recorded on-chain for a transparent, tamper-proof history.",
    },
    {
      title: "Review & Verify",
      description: "Contributions are reviewed, verified, and decisions are traceable end-to-end.",
    },
    {
      title: "Rewards Released",
      description: "Once approved, rewards are released automatically and remain auditable.",
    },
  ];

  return (
    <section className="w-full">
      <header className="text-center max-w-2xl mx-auto">
        <h2 className="text-white text-3xl md:text-4xl font-semibold">How it Works</h2>
        <p className="text-pretty mt-2 text-[var(--color-muted-foreground)]">A transparent and fair process for all</p>
      </header>

      <div className="relative mt-12">
        {/* Vertical timeline line */}
        <div
          aria-hidden="true"
          className="pointer-events-none  absolute left-1/2 top-0 bottom-0 -translate-x-1/2 border-l border-dashed border-[var(--color-border)]"
        />

        <ol className="relative space-y-10">
          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <li key={i} className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
                {/* Marker */}
                <div aria-hidden="true" className="absolute left-1/2 -translate-x-1/2 z-10">
                  <div className="h-9 w-9 rounded-full text-white bg-[#9438FF] transition-shadow duration-300 hover:shadow-[0_0_36px_#9438FF] grid place-items-center text-sm font-semibold">
                    {i + 1}
                  </div>
                </div>

                {/* Left cell */}
                <div
                  className={cn(
                    // show this cell on mobile only if it's the one holding content
                    isLeft ? "flex md:justify-end" : "hidden md:flex md:justify-end",
                  )}
                >
                  {isLeft && (
                    <div
                      className={cn(
                        "w-full md:max-w-[520px] rounded-[var(--radius-lg)] border border-[#9438FF] bg-[var(--color-card)] p-4 md:p-5 shadow-sm",
                        "md:mr-16", // space from center line
                      )}
                    >
                      <h3 className=" font-semibold">{`${i + 1}. ${step.title}`}</h3>
                      <p className="mt-2 text-sm leading-6 text-[var(--color-muted-foreground)]">{step.description}</p>
                    </div>
                  )}
                </div>

                {/* Right cell */}
                <div
                  className={cn(
                    // show this cell on mobile only if it holds content
                    !isLeft ? "flex md:justify-start" : "hidden md:flex md:justify-start",
                  )}
                >
                  {!isLeft && (
                    <div
                      className={cn(
                        "w-full md:max-w-[520px] rounded-[var(--radius-lg)] border border-[#9438FF] bg-[var(--color-card)] p-4 md:p-5 shadow-sm",
                        "md:ml-16", // space from center line
                      )}
                    >
                      <h3 className=" font-semibold">{`${i + 1}. ${step.title}`}</h3>
                      <p className="mt-2 text-sm leading-6 text-[var(--color-muted-foreground)]">{step.description}</p>
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
