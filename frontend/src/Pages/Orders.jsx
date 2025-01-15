import React, { useEffect, useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import Title from '../components/Title';
import Footer from '../components/Footer';

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  // Helper function to determine status colors
  const getStatusColor = (status) => {
    switch (status) {
      case 'Order Placed':
        return '#3590B4';
      case 'Canceled':
        return 'red';
      case 'Refunded':
      case 'Provided':
        return 'green';
      default:
        return 'gray'; // Default color for unknown statuses
    }
  };

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }
      const response = await axios.post(
        backendUrl + '/api/order/userorders',
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        let allOrdersItem = [];

        response.data.orders.forEach((order) => {
          // Create a map to store combined items
          const combinedItems = new Map();

          order.items.forEach((item) => {
            const itemKey = item.id || item._id; // Use appropriate identifier

            if (combinedItems.has(itemKey)) {
              // If item exists, add to its quantity
              const existingItem = combinedItems.get(itemKey);
              existingItem.quantity += item.quantity;
            } else {
              // If item doesn't exist, add it to the map
              combinedItems.set(itemKey, {
                ...item,
                status: order.status,
                payment: order.payment,
                paymentMethod: order.paymentMethod,
                date: order.date,
                quantity: item.quantity,
                totalAmount: order.amount // Add total amount from order
              });
            }
          });

          // Convert map values to array and add to allOrdersItem
          allOrdersItem = [...allOrdersItem, ...Array.from(combinedItems.values())];
        });

        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  // Helper function to get the correct image source
  const getImageSource = (item) => {
    if (item.isAddon) {
      return item.image; // For addon items
    }
    return item.image?.[0]; // For regular items
  };

  return (
    <section className="max-padd-container">
      <div className="pt-28 pb-10">
        <Title title1={'Order '} title2={'List'} title1Styles={'h3'} />
        {orderData &&
          orderData.map((item, id) => (
            <div key={id} className="bg-white p-2 mt-3 rounded-md overflow-hidden">
              <div className="text-gray-700 flex flex-col gap-4">
                <div className="flex gap-x-3 w-full">
                  <div className="flex gap-6">
                    <img
                      src={getImageSource(item)}
                      alt="orderItemIMG"
                      width={55}
                      className="object-cover aspect-square rounded sm:block xxs:hidden"
                    />
                  </div>
                  <div className="block w-full">
                    <p className="font-bold text-black line-clamp-1 w-[18rem]">
                      {item.isAddon ? item.addon_name : item.name}
                    </p>
                    <div className="flexBetween">
                      <div>
                        <div className="flex items-center gap-x-1 sm:gap-x-3">
                          <div className="flexCenter gap-x-1">
                            <h5 className="medium-14">Price: </h5>
                            <p>{item.totalAmount} {currency}</p>
                          </div>
                          <div className="flexCenter gap-x-1 sm:flex xxs:hidden">
                            <h5 className="medium-14">Person: </h5>
                            <p>{item.quantity}</p>
                          </div>
                          <div className="sm:flexCenter gap-x-1 hidden">
                            <h5 className="medium-14">Payment: </h5>
                            <p className="text-gray-400">{item.paymentMethod}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-x-1 sm:hidden">
                          <h5 className="medium-14">Payment: </h5>
                          <p className="text-gray-400">{item.paymentMethod}</p>
                        </div>
                        <div className="flex items-center gap-x-1 sm:hidden">
                          <h5 className="medium-14">Person: </h5>
                          <p>{item.quantity}</p>
                        </div>
                        <div className="flex items-center gap-x-1">
                          <h5 className="medium-14">Booked: </h5>
                          <p className="text-gray-400">
                            {new Date(item.date).toLocaleDateString('en-GB')}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col xl:flex-row gap-x-4 gap-y-3 -mt-5 xxs:mr-4">
                        <div className="flex items-center gap-2">
                          <p
                            className="min-w-2 h-2 rounded-full"
                            style={{ backgroundColor: getStatusColor(item.status) }}
                          ></p>
                          <p>{item.status}</p>
                        </div>
                        <button
                          onClick={loadOrderData}
                          className="btn-secondaryOne !rounded-md !px-1.5 !py-1.5 !text-xs"
                        >
                          Track Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <Footer />
    </section>
  );
};

export default Orders;