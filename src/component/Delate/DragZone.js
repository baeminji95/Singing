import { useState } from "react";

export default function DragZone({ id, setActiveId, setDragX }) {
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  const img = document.createElement("img");
  img.src =
    "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

  return (
    <div
      draggable="true"
      className="drag-zone h-full w-20 absolute right-0 top-0 bg-transparent cursor-default"
      onDragStart={(e) => {
        if (e.target.classList.contains("drag-zone")) {
          setActiveId(id);
          e.dataTransfer.setData("Test", "some data");
          e.dataTransfer.setDragImage(img, 0, 0);
          setStart(e.clientX);
          // console.log(e.clientX);
        }
      }}
      onDragOver={(e) => {
        // console.log(e.target);
        setEnd(e.clientX);
        console.log(e.clientX);

        if (start - end > 0) {
          const x = start - end;
          setDragX(x);
        }
      }}
    ></div>
  );
}
