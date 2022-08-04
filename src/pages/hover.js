import { useState } from "react";


const AttemptHover = () => {
    const [isHovering, setIsHovering] = useState(false);
  
    const handleMouseOver = () => {
      setIsHovering(true);
    };
  
    const handleMouseOut = () => {
      setIsHovering(false);
    };
  
    return (
      <div>
        <div>
          <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            Hover me
          </div>
  
          {isHovering && <h2>Hello world</h2>}
        </div>
      </div>
    );
  };

  export default AttemptHover;