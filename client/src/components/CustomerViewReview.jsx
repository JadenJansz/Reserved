import React from "react";

const CustomerViewReview = ({ review }) => {
  return (
    <div className="block py-10">
      <div className="flex justify-between bg-teal-100 rounded-2xl">
        <img src='https://lusterblue.lk/wp-content/uploads/2019/12/male-placeholder-image.jpeg' className="w-32 h-32 mr-4 rounded-full m-8"></img>
        <div className="block">
          <div className="flex justify-start py-6 px-8 space-x-32">
            <h1 className="text-base text-gray-800 font-semibold">
              {review.Name}
            </h1>
            <h1 className="text-base text-gray-800 font-semibold">*****</h1>
            <h1 className="text-base text-gray-800 font-semibold">
              {review.Date.substring(0,10)}
            </h1>
          </div>
          <p className="px-8 pb-4 text-sm">
            {review.Comment}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerViewReview;
