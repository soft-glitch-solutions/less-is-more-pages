
const Team = () => {
  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'Founder & Creative Director',
      image: '/placeholder.svg',
      bio: 'With over 15 years in minimalist design, Sarah leads our vision of purposeful simplicity.',
    },
    {
      name: 'Marcus Thompson',
      role: 'Lead Construction Manager',
      image: '/placeholder.svg',
      bio: 'Marcus brings precision and craftsmanship to every project, ensuring quality in every detail.',
    },
    {
      name: 'Elena Rodriguez',
      role: 'Operations Director',
      image: '/placeholder.svg',
      bio: 'Elena coordinates our services seamlessly, making complex projects feel effortless for clients.',
    },
    {
      name: 'David Kim',
      role: 'Technical Systems Lead',
      image: '/placeholder.svg',
      bio: 'David specializes in electrical and security systems that work invisibly behind the scenes.',
    },
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-4">
            Our Team
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            Meet the dedicated professionals who bring the "less is more" philosophy 
            to life in every project we undertake.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6 overflow-hidden rounded-full w-48 h-48 mx-auto bg-gray-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <h3 className="text-xl font-light text-gray-900 mb-2">
                {member.name}
              </h3>
              
              <p className="text-gray-600 font-light mb-4">
                {member.role}
              </p>
              
              <p className="text-sm text-gray-500 font-light leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
