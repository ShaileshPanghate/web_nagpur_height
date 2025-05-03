import Image from 'next/image';

const TeamCard = ({ member }) => {
  return (
    <div className="bg-white md:w-100 w-84 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="relative h-64">
        <Image 
          loading="lazy"
          src={member.image} 
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
        <p className="text-blue-600 mb-2">{member.role}</p>
        <p className="text-gray-600">{member.bio}</p>
      </div>
    </div>
  );
};

export default TeamCard;