import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="flex max-w-[800px] mx-auto mt-10 px-4 md:px-0 flex-[1] flex-col p-5 md:p-10 ">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
      <ContactForm />
    </div>
  );
};

export default Contact;

export async function generateMetadata() {
  return {
    title: "Hassaan Ali - Contact",
    description: "Contact page for Hassaan Ali",
  };
}
