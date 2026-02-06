import React from "react";

const ItemCard = ({ title, description, condition, location, date_posted, image, onRequest }) => {
    return (
    <div className="w-full max-w-[420px] overflow-hidden rounded-2xl bg-white shadow-lg">
      <div className="relative h-52">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-gray-900">
          {title}
        </h3>

        <p className="mb-4 text-sm leading-relaxed text-gray-600 line-clamp-2">
          {description}
        </p>

        {/* Meta info */}
        <div className="mb-6 space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span>
              Condition:
              <span className="ml-2 rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">
                {condition}
              </span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span>{location}</span>
          </div>

          <div className="flex items-center gap-2">
            <span>Posted {date_posted}</span>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={onRequest}
          className="w-full rounded-xl bg-gradient-to-b from-gray-900 to-black py-3 text-sm font-semibold text-white transition hover:opacity-95"
        >
          Request This Item
        </button>
      </div>
    </div>
    );
};

export default ItemCard;