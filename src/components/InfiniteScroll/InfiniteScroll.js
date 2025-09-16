import React, { useEffect } from "react";
import mockData from "./mockData";

const InfiniteScroll = () => {
  const [data, setData] = React.useState(mockData.slice(0, 20));
  const [isLoading, setIsLoading] = React.useState(false);
  const inputRef = React.useRef(null);
  const listRef = React.useRef([]);
  const pageRef = React.useRef(1);
  console.log("data",data.length, mockData.length);

  useEffect(() => {
    let timer;
    if (inputRef.current && listRef.current.length > 0) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && data.length < mockData.length) {
            console.log("Loading more data...");
            setIsLoading(true);
            timer = setTimeout(() => {
              setData((prevData) => {
                const nextData = mockData.slice(
                  prevData.length,
                  prevData.length + 20
                );
                return [...prevData, ...nextData];
              });
              const nextIndex = pageRef.current * 20;
              if (nextIndex < mockData.length) {
                listRef.current[nextIndex - 1].scrollIntoView({
                  behavior: "smooth",
                });
              }
              pageRef.current += 1;
              setIsLoading(false);
            }, 2000);
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 1.0,
        }
      );

      observer.observe(inputRef.current);

      return () => {
        observer.disconnect();
        clearTimeout(timer);
      };
    }
  }, []);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      <div
        style={{
          width: "500px",
          height: "500px",
          border: "1px solid black",
          overflowY: "scroll",
          position: "relative",
        }}
      >
        <div
          style={{
            opacity: isLoading ? 0.5 : 1,
          }}
        >
          {data.map((item, index) => (
            <div
              ref={(el) => (listRef.current[index] = el)}
              key={item.id}
              style={{ borderBottom: "1px solid gray", padding: "10px" }}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <div ref={inputRef} style={{ visibility: "hidden" }}></div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
