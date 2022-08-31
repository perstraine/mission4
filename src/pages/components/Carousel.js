import React, { useEffect, useState } from "react";
/* useState hook to manage our active state*/
import { useSwipeable } from 'react-swipeable';
import "./Carousel.css";

/* Renders each item*/
export const CarouselItem = ({ children, width }) => {
    return (
        <div className="carousel-item" style={{ width: width }}>
            {children}
        </div>
    );
};

/* Main controller. Controlling the active item in the carousel using transform: translateX 
  State paused used to check if user is hovering on the carousel, default set to false */

const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    /*Checking if new active index is the first or last item, and resets accordingly */
    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }
        setActiveIndex(newIndex); /* update active state */
    };
    /*useEffect hook used to init the interval for our auto cycling in the carousel
    interval set to 4000 miliseconds, meaning updateIndex executed every 4 seconds as long as it is not paused by mouse hover*/
    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                updateIndex(activeIndex + 1);
            }
        }, 4000);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    });
    //Swipe functionality for mobile devices
    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1)
    });
    // - using 100 in line 60, because we have 100% width for each item, so to slide from 1 item to the next completely
    // we use the full width to slide across correctly when changing items
    return (
        <div
            {...handlers} /*Applies swipe handlers to carousel */
            className="carousel" /*Event handlers to check mouse hover/not hover event above */
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            >
            <div
                
                className="inner"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {/* React.Children.map API to iterate all the CarouselItem children, and adjust width property */}
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" });
                })}
            </div>
           
            <div className="indicators">
            <button className="previous"
                    onClick={() => {
                        updateIndex(activeIndex - 1);
                    }}
                >
                    <img src="https://icon-library.com/images/white-arrow-icon-png/white-arrow-icon-png-28.jpg" style={{height: 110}} alt=""/>
                </button>
                {/* Below code to display page labels */}
                {React.Children.map(children, (child, index) => {
                    return (
                        /* className line allows us to customize the current active index to highlight which index is active  */
                        <button
                            className={`${index === activeIndex ? "active" : ""}`}
                            onClick={() => {
                                updateIndex(index);
                            }}
                        >
                           {/*  {index + 1} */} {/* Since index starts at 0, +1 used to display 1 2 3 instead of 0 1 2 on labels, can now skip to any index directly */}
                        </button>
                    );
                })}
                <button className="next"
                    onClick={() => {
                        updateIndex(activeIndex + 1);
                    }}
                >
                    <img src="https://icon-library.com/images/white-arrow-icon-png/white-arrow-icon-png-28.jpg" style={{height: 110}} alt=""/>
                </button>

            </div>
        </div>
    );
};

export default Carousel;