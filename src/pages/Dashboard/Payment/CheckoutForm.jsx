import { CardElement } from "@stripe/react-stripe-js"

const CheckoutForm = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button>pay</button>
            
        </form>
    </div>
  )
}

export default CheckoutForm
