import React from 'react';
import Button from '../componetnts/Button.JSx';

const ReviewsPage = () => {
  const reviewsData = [
    {
      id: 1,
      title: 'Amazing Product!',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
      author: 'John Doe',
      rating: 5,
    },
    {
      id: 2,
      title: 'Excellent Service',
      content: 'Nullam hendrerit cursus felis, vel tincidunt neque varius at. Vestibulum quis libero vel tellus posuere tincidunt.',
      author: 'Jane Smith',
      rating: 4,
    },
    {
      id: 3,
      title: 'Awesome Service',
      content: 'Nullam hendrerit cursus felis, vel tincidunt neque varius at. Vestibulum quis libero vel tellus posuere tincidunt.',
      author: 'Smith dow',
      rating: 4,
    },
   
  ];

  return (
    <div className=" min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">Customer Reviews</h2>
        <p className='text-blue-500 my-2'><Button /></p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewsData.map((review) => (
            <div key={review.id} className="bg-orange-100 p-6 rounded-md shadow-md">
              <h3 className="text-lg font-semibold mb-2">{review.title}</h3>
              <p className="text-gray-600 mb-4">{review.content}</p>
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">
                  {Array.from({ length: review.rating }, (_, index) => (
                    <svg
                      key={index}
                      className="w-5 h-5 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.486 2 2 6.487 2 12s4.486 10 10 10 10-4.487 10-10S17.514 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                    </svg>
                  ))}
                </span>
                <span className="text-gray-500 ml-2">{review.rating}/5</span>
              </div>
              <p className="text-sm text-gray-500">- {review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
