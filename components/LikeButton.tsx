"use client";

import { useState } from "react";
import HeartIcon from "./HeartIcon";

export default function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <button onClick={() => setIsLiked(!isLiked)}>
      <HeartIcon filled={isLiked} />
    </button>
  );
}
