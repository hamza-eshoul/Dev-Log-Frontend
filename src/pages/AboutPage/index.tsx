// partials
import Header from "./components/Header";

const AboutPage = () => {
  return (
    <>
      <Header />

      <div className="mx-auto max-w-6xl px-4">
        <h1 className="mb-6 text-2xl font-bold sm:text-3xl">About DevLog</h1>

        <section className="mb-8 text-justify text-base sm:text-lg">
          <p className="mb-4">
            Welcome to <strong>DevLog</strong>, a blog created to share my
            passion for programming and web development! My name is Hamza
            Eshoul, and I've been deeply immersed in the world of coding.
            Through DevLog, I aim to provide valuable insights, practical tips,
            and engaging content for fellow developers and tech enthusiasts.
          </p>

          <p className="mb-4">
            DevLog is designed to be a hub for all things related to
            programming. Whether you're interested in learning new programming
            languages, exploring cutting-edge web technologies, or seeking
            solutions to common development challenges, you'll find a wealth of
            resources here. From beginner-friendly tutorials to advanced coding
            techniques, my goal is to make complex topics accessible and
            enjoyable.
          </p>

          <p className="mb-4">
            Here at DevLog, you can expect to find a variety of content,
            including:
          </p>

          <ul className="mb-4 list-inside list-disc">
            <li>
              Tutorials and How-To Guides: Step-by-step instructions on various
              programming topics and tools.
            </li>
            <li>
              Code Examples and Snippets: Practical code snippets to help you
              solve real-world problems.
            </li>
            <li>
              Personal Experiences and Insights: Reflections on my journey as a
              developer and lessons learned along the way.
            </li>
          </ul>

          <p>
            Thank you for visiting DevLog! I encourage you to explore the blog,
            and connect with me through the contact form if you have any
            questions or feedback. Your support and engagement mean a lot, and
            I'm excited to have you join me on this journey of discovery and
            learning.
          </p>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
