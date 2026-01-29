import React from "react";
import { motion } from "framer-motion";

export default function FadeInCard({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      className="rounded-xl shadow"
    >
      {children}
    </motion.div>
  );
}
