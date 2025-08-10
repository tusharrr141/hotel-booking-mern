import React, { useState } from "react";
import { roomsDummyData } from "../../assets/assets";
import Title from "../../components/Title";

const ListRoom = () => {
  const [rooms, setRooms] = useState(roomsDummyData);

  const toggleAvailability = (index) => {
    setRooms((prev) =>
      prev.map((room, i) =>
        i === index ? { ...room, isAvailable: !room.isAvailable } : room
      )
    );
  };

  return (
    <div className="space-y-6">
      <Title
        align="left"
        font="outfit"
        title="Room Listings"
        subTitle="View, edit, or manage all listed rooms. Keep the information up-to-date to provide the best experience for users."
      />

      <p className="text-gray-500 font-medium">All Rooms</p>

      <div className="w-full max-w-4xl border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="max-h-80 overflow-y-auto">
          <table className="w-full border-collapse">
            <thead className="bg-gray-100 sticky top-0 z-10 shadow-sm">
              <tr>
                <th className="py-3 px-4 text-left text-gray-800 font-semibold">
                  Name
                </th>
                <th className="py-3 px-4 text-left text-gray-800 font-semibold max-sm:hidden">
                  Facilities
                </th>
                <th className="py-3 px-4 text-gray-800 font-semibold">
                  Price / Night
                </th>
                <th className="py-3 px-4 text-center text-gray-800 font-semibold">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-sm">
              {rooms.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 transition-colors duration-150"
                >
                  <td className="py-3 px-4 font-medium text-gray-700">
                    {item.roomType}
                  </td>
                  <td className="py-3 px-4 text-gray-600 max-sm:hidden">
                    {item.amenities.join(", ")}
                  </td>
                  <td className="py-3 px-4 font-semibold text-blue-600 text-center align-middle">
                    ${item.pricePerNight}
                  </td>

                  <td className="py-3 px-4 text-center">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={item.isAvailable}
                        onChange={() => toggleAvailability(index)}
                      />
                      <div className="w-12 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600 transition-colors"></div>
                      <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform peer-checked:translate-x-6"></span>
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListRoom;
