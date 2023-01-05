import { AnimatePresence, motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
};

export const AnimatePresenceLayout = ({ children }: Props) => {
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: 15 }}
        transition={{ duration: 0.5 }}
        style={{ width: '100%', height: '100%' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
