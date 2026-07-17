import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2 } from "lucide-react";
import { useCart } from "../../context/CartContext";

const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    totalPrice,
  } = useCart();

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
            className="fixed inset-0 bg-black/40 z-40"
          />

          {/* Drawer */}

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35 }}
            className="fixed top-0 right-0 w-full sm:w-[420px] h-screen bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}

            <div className="flex items-center justify-between p-5 border-b">
              <h2 className="text-2xl font-bold">
                Shopping Cart
              </h2>

              <button onClick={closeCart}>
                <X size={28} />
              </button>
            </div>

            {/* Body */}

            <div className="flex-1 overflow-y-auto p-5">

              {cart.length === 0 ? (

                <div className="flex justify-center items-center h-full text-gray-500">
                  Cart is Empty
                </div>

              ) : (

                cart.map((item) => (

                  <div
                    key={item.id}
                    className="flex gap-4 border-b pb-4 mb-4"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-24 h-24 rounded-xl object-cover"
                    />

                    <div className="flex-1">

                      <h3 className="font-bold text-lg">
                        {item.title}
                      </h3>

                      <p className="text-gray-500">
                        Qty : {item.quantity}
                      </p>

                      <p className="text-orange-600 font-semibold mt-2">
                        ₹
                        {(item.price * item.quantity).toLocaleString(
                          "en-IN"
                        )}
                      </p>

                    </div>

                    <button
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

              <div className="flex justify-between text-xl font-bold mb-5">

                <span>Total</span>

                <span>
                  ₹ {totalPrice.toLocaleString("en-IN")}
                </span>

              </div>

              <button
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-xl font-semibold"
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