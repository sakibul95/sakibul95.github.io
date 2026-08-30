import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { TestimonialCard } from "@/components/testimonial-card";
import { siteConfig } from "@/lib/site";
import styles from "./testimonials.module.css";

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
};

/* LinkedIn does not expose the profile's recommendation text publicly.
   Replace these clearly marked entries with the exact quote, name and role
   from each recommendation before publishing. The layout supports any number
   of entries; four to eight works especially well for the two moving rows. */
const testimonials = [
  {
    id: "recommendation-01",
    quote:
      "It was fantastic to work together with Sakibul Islam, who was an exceptional Software Engineer. He has extraordinary expertise in leadership, hardworking and motivation. consistently delivers high quality work products, meets, or exceeds deadlines, and assists his co-workers at every opportunity. Has an in-depth understanding of modern IT technologies. He has really great knowledge on MSSQL, .Net Core, Docker and AWS based cloud services. Sakibul Islam is a great asset to any company. Highly Recommended him.",
    name: "Mahabubur Rahman",
    role: "Co-Founder & CTO @ Celestial Invention | Tech Lead @ Adcelerete Limited",
  },
  {
    id: "recommendation-02",
    quote:
      "Sakib is an extremely dedicated worker that can solve any coding issue with ease. We've collaborated on several projects together, and I've always found him to be a talented and committed professional. His knowledge in the area of .NET Core · Angular · MySQL · Amazon Web Services (AWS) has been extremely beneficial to our company. Additionally, he's a fantastic guy all around! I would highly recommend him.",
    name: "Sunzid Ahmed Rafi",
    role: "Product Manager @ Keeron",
  },
  {
    id: "recommendation-03",
    quote:
      "Sakibul is an inspiring person as well as a fantastic and precise Software Engineer. Proactive, dynamic, and meticulously organized. Excellent Software Engineer.  He is very good at C# language. His basic is very clear in his areas of expertise fields. He has very good leadership qualities. We have worked together with AWS Cloud and GCP project deployment. He is very good at Linux terminals. He is prepared to deal with difficult situations and solve problems quickly. He always does a good job. Professional with zeal. He will always find a brilliant, elegant, and cost-effective solution to any problem, no matter how complex it is. I could say he is very enthusiastic is learning new terms of technology. Worth Recommended.",
    name: "Ijaz Ahmed",
    role: "Lead – DevOps & Technology Operations @ Adplay Technologies",
  },
  {
    id: "recommendation-04",
    quote:
      "Sakibul Islam is highly skilled developer who plays a major role among our team. His professional attitude and focus always help our team to achieve goal successfully. The way he thinks to solve any problem is excellent and a fine example for others to learn. He has outstanding capability to adapt any new technology or challenges quickly and deliver in right time and that's make him a successful software engineer professional. I always wish him a very successful professional life ahead.",
    name: "Md. Tanvir Ahmed",
    role: "Software Engineer @ Apex DMIT Ltd ",
  },
  // {
  //   id: "recommendation-05",
  //   quote:
  //     "Paste another exact LinkedIn recommendation here. Two or three sentences usually fit this card best.",
  //   name: "Recommender name",
  //   role: "Their role · Company",
  // },
  // {
  //   id: "recommendation-06",
  //   quote:
  //     "Choose a quote that adds a new perspective — reliability, product thinking, code quality, or client partnership.",
  //   name: "Recommender name",
  //   role: "Their role · Company",
  // },
] satisfies readonly Testimonial[];

function TestimonialRow({
  items,
  reverse = false,
}: {
  items: readonly Testimonial[];
  reverse?: boolean;
}) {
  return (
    <div className={`${styles.track} overflow-hidden py-2`}>
      <div className={`${styles.marquee} ${reverse ? styles.reverse : ""}`}>
        <div className="flex gap-4">
          {items.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        <div className={`${styles.duplicate} flex gap-4`} aria-hidden="true">
          {items.map((testimonial) => (
            <TestimonialCard
              key={`${testimonial.id}-duplicate`}
              testimonial={testimonial}
              duplicate
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  // const midpoint = Math.ceil(testimonials.length / 2);
  // const firstRow = testimonials.slice(0, midpoint);
  // const secondRow = testimonials.slice(midpoint);

  const firstRow = testimonials; // to show all in a sinfle row, comment out the above two lines and uncomment this line

  return (
    <section
      id="testimonials"
      className="scroll-mt-24 overflow-hidden border-t border-border py-24 sm:py-32"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="From LinkedIn"
          title="What people say about working with me"
          description="Recommendations from people I've worked with — shared in their own words on LinkedIn."
          action={{
            label: "View LinkedIn profile",
            href: siteConfig.socials.linkedin,
          }}
        />
      </div>

      <Reveal>
        <div className="relative">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-background to-transparent sm:w-28"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-background to-transparent sm:w-28"
            aria-hidden="true"
          />
          <div className="space-y-2">
            <TestimonialRow items={firstRow} />
            {/* <TestimonialRow items={secondRow} reverse /> */}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
