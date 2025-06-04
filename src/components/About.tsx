
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-8">
            Why Less?
          </h2>
          
          <div className="space-y-8 text-lg text-gray-600 font-light leading-relaxed">
            <p>
              In a world of complexity and excess, we believe in the power of reduction. 
              Our philosophy is simple: by removing the unnecessary, we reveal what truly matters.
            </p>
            
            <p>
              Each project we undertake is an exercise in thoughtful minimalism. We don't just 
              build, install, or clean—we curate spaces that breathe with purpose and intention.
            </p>
            
            <p>
              The result? Environments that are not only functional and beautiful, but also 
              sustainable, maintainable, and timeless.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-extralight text-gray-900 mb-2">50+</div>
              <div className="text-gray-600 font-light">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extralight text-gray-900 mb-2">100%</div>
              <div className="text-gray-600 font-light">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extralight text-gray-900 mb-2">5★</div>
              <div className="text-gray-600 font-light">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
