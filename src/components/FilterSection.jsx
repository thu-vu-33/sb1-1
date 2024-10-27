import React from 'react';

function FilterSection() {
  return (
    <div className="grid grid-cols-6 gap-4">
      <div className="filter-group">
        <label className="block text-sm mb-2">Loại phim:</label>
        <select className="w-full bg-gray-800 p-2 rounded focus:ring-2 focus:ring-green-400 focus:outline-none">
          <option>- Tất cả -</option>
        </select>
      </div>
      <div className="filter-group">
        <label className="block text-sm mb-2">Thể loại:</label>
        <select className="w-full bg-gray-800 p-2 rounded focus:ring-2 focus:ring-green-400 focus:outline-none">
          <option>- Tất cả -</option>
        </select>
      </div>
      <div className="filter-group">
        <label className="block text-sm mb-2">Quốc gia:</label>
        <select className="w-full bg-gray-800 p-2 rounded focus:ring-2 focus:ring-green-400 focus:outline-none">
          <option>- Tất cả -</option>
        </select>
      </div>
      <div className="filter-group">
        <label className="block text-sm mb-2">Năm:</label>
        <select className="w-full bg-gray-800 p-2 rounded focus:ring-2 focus:ring-green-400 focus:outline-none">
          <option>- Tất cả -</option>
        </select>
      </div>
      <div className="filter-group">
        <label className="block text-sm mb-2">Thời lượng:</label>
        <select className="w-full bg-gray-800 p-2 rounded focus:ring-2 focus:ring-green-400 focus:outline-none">
          <option>- Tất cả -</option>
        </select>
      </div>
      <div className="filter-group">
        <label className="block text-sm mb-2">Sắp xếp:</label>
        <select className="w-full bg-gray-800 p-2 rounded focus:ring-2 focus:ring-green-400 focus:outline-none">
          <option>Ngày cập nhật</option>
        </select>
      </div>
    </div>
  );
}

export default FilterSection;