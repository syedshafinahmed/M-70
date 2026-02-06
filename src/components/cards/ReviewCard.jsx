import { AiFillLike } from "react-icons/ai";

const ReviewCard = ({ review }) => {
  return (
    <div className="group relative bg-[#111] border border-white/10 rounded-3xl p-5 shadow-md
                    hover:shadow-[0_10px_30px_rgba(249,115,22,0.2)] transition-all duration-300">

      {/* Header: Avatar, Name */}
      <div className="flex items-center gap-4">
        <img
          src={review.photo}
          alt={review.user}
          className="h-12 rounded-2xl object-cover border border-orange-500 shadow-md"
        />
        <div className="flex flex-col">
          <span className="text-white font-semibold line-clamp-1">{review.user}</span>
          <span className="text-gray-400 text-xs font-extralight">{review.email}</span>
        </div>
      </div>

      <div className="ml-auto flex items-center mt-3 gap-1">

        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < review.rating ? "text-orange-400" : "text-gray-700"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.951a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.287 3.952c.3.922-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.176 0l-3.36 2.44c-.784.57-1.838-.196-1.539-1.118l1.286-3.952a1 1 0 00-.364-1.118L2.038 9.378c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.951z" />
          </svg>
        ))}
      </div>

      {/* Review Text */}
      <p className="mt-3 text-gray-300 text-sm text-justify  line-clamp-4">
        {review.review}
      </p>

      {/* Likes */}
      {review.likes?.length >= 0 && (
        <div className="mt-3 flex justify-between items-center">
          <div className="text-orange-400 font-extralight text-sm flex items-start fugaz gap-1">
            <AiFillLike size={16} />
            <span>{review.likes.length}</span>
          </div>
          <span className="text-gray-500 text-xs font-extralight">
            {new Date(review.date).toLocaleDateString()}
          </span>
          {/* {review.likes.slice(0, 3).map((likeEmail, idx) => (
            <span
              key={idx}
              className="bg-white/10 text-gray-300 px-2 py-1 rounded-full text-xs"
            >
              {likeEmail.split("@")[0]}
            </span>
          ))} */}
          {review.likes.length > 3 && (
            <span className="bg-white/10 text-gray-300 px-2 py-1 rounded-full text-xs">
              +{review.likes.length - 3} more
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default ReviewCard;
