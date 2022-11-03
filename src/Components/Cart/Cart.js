import Modal from "../UI/Modal";

const Cart = () => {
  return (
    <Modal>
      Sushi
      <div>
        <span>Amount</span>
        <span>$18.99</span>
      </div>
      <div>
        <button>Close</button>
        <button>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
