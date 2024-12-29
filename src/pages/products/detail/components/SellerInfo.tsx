import React from "react";

interface Seller {
  _id: string;
  name: string;
  company: {
    name: string;
    license: string;
  };
  phone: string;
}

interface Props {
  seller: Seller;
}

const SellerInfo: React.FC<Props> = ({ seller }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-medium text-gray-900">賣家資訊</h2>
      <div className="mt-4 space-y-3">
        <div>
          <p className="text-sm text-gray-500">服務公司</p>
          <p className="text-gray-900">{seller.company.name}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">營業執照</p>
          <p className="text-gray-900">{seller.company.license}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">聯絡人</p>
          <p className="text-gray-900">{seller.name}</p>
        </div>
      </div>
    </div>
  );
};

export default SellerInfo;
