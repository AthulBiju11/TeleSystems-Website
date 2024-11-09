import React from 'react';
import { Star, StarHalf } from 'lucide-react';

const CustomerOpinion = () => {
  const testimonials = [
    {
      rating: 5,
      text: "Quality Speedy Service Of Landline Phones",
      author: "Dilip Oommen",
      avatar: "/images/Person1.png"
    },
    {
      rating: 5,
      text: "Years of experience and excellent service.",
      author: "Majo Mathew",
      avatar: "/images/Person2.png"
    },
    {
      rating: 5,
      text: "Good after sales service . Highly recommend",
      author: "Sanju K James Cherupushpam",
      avatar: "/images/Person3.png"
    }
  ];

  const renderStars = (rating : number) => {
    return (
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-5 h-5 ${
              index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our customer's opinion</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
        Hear what our customers have to say about their experience with us. Real stories, real opinions from those who matter most.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {renderStars(testimonial.rating)}
            <p className="text-gray-600 mb-6 line-clamp-6">
              {testimonial.text}
            </p>
            <div className="flex items-center">
              <img
                src={testimonial.avatar}
                alt={testimonial.author}
                className="w-10 h-10 rounded-full"
              />
              <span className="ml-3 font-medium text-gray-900">
                {testimonial.author}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerOpinion;