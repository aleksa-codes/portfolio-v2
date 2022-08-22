import { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const PageTransition = ({ children }: { children: ReactNode }): JSX.Element => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.4,
          ease: [0.61, 1, 0.88, 1]
        }
      }}
    >
      {children}
    </motion.div>
  </AnimatePresence>
);

export default PageTransition;
