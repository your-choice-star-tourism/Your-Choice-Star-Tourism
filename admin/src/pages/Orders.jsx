import React from "react";
import { useState, useEffect } from "react";
import { backend_url, currency } from "../App";
import axios from "axios";
import { toast } from "react-toastify";
import { TfiPackage } from "react-icons/tfi";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllorders = async () => {
    if (!token) {
      return null;
    }
    try {
      const response = await axios.post(
        backend_url + "/api/order/list",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backend_url + "/api/order/status",
        {
          orderId,
          status: event.target.value,
        },
        {
          headers: { token },
        }
      );

      if (response.data.success) {
        await fetchAllorders();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllorders();
  }, [token]);

  return (
    <div className="px-2 sm:px-8 my-4 sm:my-14">
      <div className="flex flex-col gap-4">
        {orders.map((order) => (
          <div
            key={order._id}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[0.5fr_4fr_4fr_0.5fr_1fr] gap-4 items-center p-3 text-gray-700 bg-white rounded-lg"
          >
            <div className="hidden xl:block ring-1 ring-slate-900/5 rounded p-7 bg-primary">
              <TfiPackage className="text-3xl text-secondary" />
            </div>
            <div>
              <div className="flex items-start gap-1">
                <div className="medium-14">Order:</div>
                <div className="flex flex-col relative top-0.5">
                  {order.items.map((item, index) => (
                    <p key={index}>
                      {item.isAddon ? item.addon_name : item.name} x{" "}
                      {item.quantity}
                      <span className="ml-1">
                        ({item.isChildTicket ? "Child" : "Adult"})
                      </span>
                    </p>
                  ))}
                </div>
              </div>
              <p>
                <span className="text-tertiary font-semibold medium-14 mx-[0.5px]">
                  Name:{" "}
                </span>
                {order.address.firstName + " " + order.address.lastName}
              </p>
              <p>
                <span className="text-tertiary font-semibold medium-14 mx-[0.5px]">
                  Phone:{" "}
                </span>
                {order.address.phone}
              </p>
              <p>
                <span className="text-tertiary font-semibold medium-14 mx-[0.5px]">
                  Email:{" "}
                </span>
                {order.address.email}
              </p>
              <p>
                <span className="text-tertiary font-semibold medium-14 mx-[0.5px]">
                  Pickup:{" "}
                </span>
                <span>{order.address.street + ", "}</span>
                <span>{order.address.city}</span>
              </p>
            </div>
            <div>
              <p>
                <span className="text-tertiary font-semibold medium-14 mx-[0.5px]">
                  Method:{" "}
                </span>
                {order.paymentMethod}
              </p>
              <p>
                <span className="text-tertiary font-semibold medium-14 mx-[0.5px]">
                  Payment:{" "}
                </span>
                <span
                  className={order.payment ? "text-green-500" : "text-red-500"}
                >
                  {order.payment ? "Done" : "Failed"}
                </span>
              </p>
              <p>
                <span className="text-tertiary font-semibold medium-14 mx-[0.5px]">
                  Total Customers:{" "}
                </span>
                {order.items.length}
              </p>
              <p>
                <span className="text-tertiary font-semibold medium-14 mx-[0.5px]">
                  Booked:{" "}
                </span>
                {new Date(order.date).toLocaleDateString("en-GB")}
              </p>
            </div>
            <p>
              <span className="text-tertiary font-semibold medium-14 mx-[0.5px]">
                Price:{" "}
              </span>
              {order.amount}
              {currency}
            </p>
            <select
              onChange={(event) => statusHandler(event, order._id)}
              value={order.status}
              className="p-1 ring-1 ring-slate-900/5 rounded max-w-36 bg-primary text-xs font-semibold"
            >
              {order.payment ? (
                <>
                  <option value="Order Placed">Order Placed</option>
                  <option value="Canceled">Canceled</option>
                  <option value="Refunded">Refunded</option>
                  <option value="Provided">Provided</option>
                </>
              ) : (
                <option value="Didn't Booked">Didn't Booked</option>
              )}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
