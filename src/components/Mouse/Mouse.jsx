import useMousePosition from "../../hooks/useMousePosition";
import "./Mouse.css";

const Mouse = () => {
  const mousePosition = useMousePosition();

  return (
    <div
      id="trailer"
      style={{
        transform: `translate(${mousePosition.x - 10}px, ${
          mousePosition.y - 10
        }px)`,
      }}
    ></div>
  );
};

export default Mouse;
