import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    totalPrice,
  } = useCart();

  const navigate = useNavigate();

  const handleCheckout = () => {
    closeCart();
    navigate("/checkout");
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-40 bg-black/40"
          />

          {/* Drawer */}

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35 }}
            className="fixed right-0 top-0 z-[999] flex h-screen w-full flex-col bg-white shadow-2xl sm:w-[420px]"
          >
            {/* Header */}

            <div className="flex items-center justify-between border-b p-5">
              <h2 className="text-2xl font-bold">
                Shopping Cart
              </h2>

              <button
                onClick={closeCart}
                className="cursor-pointer"
              >
                <X size={28} />
              </button>
            </div>

            {/* Body */}

            <div className="flex-1 overflow-y-auto p-5">

              {cart.length === 0 ? (
                <div className="flex h-full items-center justify-center text-gray-500">
                  Cart is Empty
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="mb-4 flex gap-4 border-b pb-4"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-24 w-24 rounded-xl object-cover"
                    />

                    <div className="flex-1">
                      <h3 className="text-lg font-bold">
                        {item.title}
                      </h3>

                      <p className="text-gray-500">
                        Qty : {item.quantity}
                      </p>

                      <p className="mt-2 font-semibold text-orange-600">
                        ₹
                        {(
                          item.price * item.quantity
                        ).toLocaleString("en-IN")}
                      </p>
                    </div>

                    <button
                      className="cursor-pointer"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2
                        size={20}
                        className="text-red-500"
                      />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}

            <div className="border-t p-5">

              <div className="mb-5 flex justify-between text-xl font-bold">
                <span>Total</span>

                <span>
                  ₹ {totalPrice.toLocaleString("en-IN")}
                </span>
              </div>

              <button
                type="button"
                onClick={handleCheckout}
                disabled={cart.length === 0}
                className="w-full cursor-pointer rounded-xl bg-orange-600 py-3 font-semibold text-white transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:bg-gray-300"
              >
                Proceed Enquiry
              </button>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;