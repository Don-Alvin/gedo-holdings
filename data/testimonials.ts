// src/data/testimonials.ts
// Cards show text + name + location only. `service` is kept as metadata (not rendered).

export type Testimonial = {
  text: string;
  name: string;
  location: string;
  service?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Michael",
    location: "Westlands, Nairobi",
    service: "Office Partitioning",
    text: "Our office partitioning project was completed professionally and on schedule. The new layout has greatly improved the functionality and appearance of our workspace.",
  },
  {
    name: "Faith",
    location: "Migori",
    service: "Home Construction & Architectural Design",
    text: "From the initial architectural drawings to the final handover of our home, the team demonstrated professionalism, transparency, and excellent workmanship.",
  },
  {
    name: "Peter",
    location: "Kiambu",
    service: "Home Construction & Architectural Design",
    text: "The entire process, from design consultations to completion of the house, was well managed. We are extremely pleased with the quality of our new home.",
  },
  {
    name: "Grace",
    location: "Nairobi",
    service: "Cabro Installation",
    text: "The cabro installation transformed our compound completely. The work was neat, durable, and completed within the agreed timeline.",
  },
  {
    name: "Daniel",
    location: "Kitui",
    service: "Cabro Installation",
    text: "The team delivered high-quality cabro works that have significantly improved access and drainage around our property.",
  },
  {
    name: "Susan",
    location: "Nairobi",
    service: "Home Construction",
    text: "Our residential construction project was handled with great professionalism. Communication was excellent and the final result exceeded our expectations.",
  },
  {
    name: "Brian",
    location: "Kisumu",
    service: "Repairs & Renovations",
    text: "The renovation works were completed efficiently and to a very high standard. Our property now looks modern and refreshed.",
  },
  {
    name: "Ann",
    location: "Nyeri",
    service: "Repairs & Renovations",
    text: "We hired the team for repair and upgrade works, and they delivered quality workmanship while keeping the project on schedule.",
  },
  {
    name: "Kevin",
    location: "Nairobi",
    service: "Repairs & Renovations",
    text: "Their renovation team paid attention to every detail and ensured the project was completed to our satisfaction.",
  },
];

// Pre-split into the component's three columns (3 each).
export const firstColumn = testimonials.slice(0, 3);
export const secondColumn = testimonials.slice(3, 6);
export const thirdColumn = testimonials.slice(6, 9);
