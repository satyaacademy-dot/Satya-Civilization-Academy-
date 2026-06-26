import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CreditCard, CheckCircle2 } from 'lucide-react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useAuth } from '../lib/AuthContext';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  price: string;
}

export default function PaymentModal({ isOpen, onClose, planName, price }: PaymentModalProps) {
  const { user, userData } = useAuth();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePayment = async () => {
    if (!user) return;
    
    setIsProcessing(true);
    
    // Simulate payment processing delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    try {
      // Update user plan in Firestore
      const userRef = doc(db, 'users', user.uid);
      await updateDoc(userRef, {
        plan: planName,
        updatedAt: new Date().toISOString()
      });
      
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Payment failed", error);
    } finally {
      setIsProcessing(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl relative"
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5 text-slate-500" />
          </button>
          
          <div className="p-8">
            {isSuccess ? (
              <div className="text-center py-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500"
                >
                  <CheckCircle2 className="w-10 h-10" />
                </motion.div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Payment Successful!</h3>
                <p className="text-slate-600">Your {planName} plan has been activated.</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Upgrade to {planName}</h3>
                <p className="text-slate-600 mb-8">Secure your access to premium features.</p>
                
                <div className="bg-slate-50 p-6 rounded-2xl mb-8 border border-slate-100">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-slate-600 font-medium">{planName} Plan</span>
                    <span className="text-slate-900 font-bold">₹{price}/month</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Taxes & Fees</span>
                    <span className="text-slate-500">₹0.00</span>
                  </div>
                  <div className="h-px bg-slate-200 my-4"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-900 font-bold">Total Due</span>
                    <span className="text-2xl font-bold text-primary-600">₹{price}</span>
                  </div>
                </div>

                <button
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className="w-full py-4 rounded-xl bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    'Processing...'
                  ) : (
                    <>
                      <CreditCard className="w-5 h-5" />
                      Pay ₹{price} Securely
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-slate-400 mt-4">
                  This is a simulated payment flow for demonstration purposes.
                </p>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
