import React from "react";
import Image from "next/image";
import fitfam from "@/public/assets/illustration/Fitfam.svg";

const OrderSection: React.FC = () => {
  return (
    <div
      className="h-[450px] md:h-[800px] rounded-2xl py-6 px-4 md:p-8 relative flex flex-col"
      style={{ backgroundColor: "#FF884D" }}
    >
      <p className="text-[32px] md:text-7xl tracking-[-2px] text-center font-bold mt-5 z-10">
        Place your orders
      </p>
      <div className="absolute w-full h-full left-0 top-0 lg:top-10 flex flex-col items-center justify-center">
        <Image
          src={fitfam}
          alt="african meal"
          className="w-[50%] h-[50%] lg:h-[70%] lg:w-[85%]"
        />
      </div>
      <div className="mt-auto relative">
        <div className="md:flex">
          <div className="relative">
            <button
              style={{
                backgroundColor: "rgb(12, 81, 63)",
                borderColor: "transparent",
                color: "rgb(255, 136, 77)",
              }}
            >
              <span>
                <span style={{ backgroundColor: "#0C513F" }}></span>
              </span>
              <span>
                <span style={{ backgroundColor: "#0C513F" }}></span>
              </span>
              <span
                style={{
                  color: "rgb(255, 136, 77)",
                  backgroundColor: "transparent",
                }}
              >
                <svg
                  width="21"
                  height="24"
                  fill="#0C513F"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 142 170"
                  color="#FF884D"
                >
                  <path
                    d="M147.088 74.442a55.722 55.722 0 0 1-2.791 17.472 73.102 73.102 0 0 1-26.43 39.198h-.015L73.823 168l-48.089-40.248C12.806 114.703 1.991 97.022 1.000 76.475a72.934 72.934 0 0 1 144.595-16.647c.078.427.040.868-.111 1.275a55.929 55.929 0 0 1 1.605 13.340Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M74.248 89.583c15.853 0 28.703-12.850 28.703-28.703 0-15.852-12.850-28.703-28.703-28.703-15.852 0-28.703 12.850-28.703 28.703 0-15.852 12.850-28.703 28.703-28.703Z"
                    fill="color"
                  ></path>
                </svg>
              </span>
            </button>
            <button
              style={{
                backgroundColor: "rgb(12, 81, 63)",
                borderColor: "transparent",
                color: "rgb(255, 136, 77)",
              }}
            >
              <span>
                <span style={{ backgroundColor: "#0C513F" }}></span>
              </span>
              <span>
                <span style={{ backgroundColor: "#0C513F" }}></span>
              </span>
              <span
                style={{
                  color: "rgb(255, 136, 77)",
                  backgroundColor: "transparent",
                }}
              >
                01
              </span>
            </button>
            <button
              style={{
                backgroundColor: "rgb(12, 81, 63)",
                borderColor: "transparent",
                color: "rgb(255, 136, 77)",
              }}
            >
              <span>
                <span style={{ backgroundColor: "#0C513F" }}></span>
              </span>
              <span>
                <span style={{ backgroundColor: "#0C513F" }}></span>
              </span>
              <span
                style={{
                  color: "rgb(255, 136, 77)",
                  backgroundColor: "transparent",
                }}
              >
                02
              </span>
            </button>
            <button
              style={{
                backgroundColor: "transparent",
                borderColor: "rgb(12, 81, 63)",
                color: "rgb(12, 81, 63)",
              }}
            >
              <span>
                <span style={{ backgroundColor: "#0C513F" }}></span>
              </span>
              <span>
                <span style={{ backgroundColor: "#0C513F" }}></span>
              </span>
              <span
                style={{
                  color: "rgb(12, 81, 63)",
                  backgroundColor: "rgb(255, 136, 77)",
                }}
              >
                03
              </span>
            </button>
            <button
              style={{
                backgroundColor: "rgb(12, 81, 63)",
                borderColor: "transparent",
                color: "rgb(255, 136, 77)",
              }}
            >
              <span>
                <span style={{ backgroundColor: "#0C513F" }}></span>
              </span>
              <span>
                <span style={{ backgroundColor: "#0C513F" }}></span>
              </span>
              <span
                style={{
                  color: "rgb(255, 136, 77)",
                  backgroundColor: "transparent",
                }}
              >
                <svg
                  width="40"
                  height="40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 0s-.834 17.324-20 20c0 0 16.453.315 20 20 0 0 1.13-17.018 20-20 0 0-17.93-2.523-20-20Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
          <div className="hidden md:block md:ml-auto">
            <div className="StepsNav_nav__U_kAP">
              <button style={{ backgroundColor: "#0C513F" }}>
                <span>
                  <span></span>
                </span>
                <span>
                  <span></span>
                </span>
                <span style={{ backgroundColor: "transparent" }}>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    color="#FF884D"
                    style={{ color: "#FF884D" }}
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c-9.4-9.4-24.6-9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L136.6 216H424c-13.3 0-24 10.7-24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c-9.8 9.3-10 24.8-.4 34.3z"></path>
                  </svg>
                </span>
              </button>
              <button style={{ backgroundColor: "#0C513F" }}>
                <span>
                  <span></span>
                </span>
                <span>
                  <span></span>
                </span>
                <span style={{ backgroundColor: "transparent" }}>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    color="#FF884D"
                    style={{ color: "#FF884D" }}
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSection;
