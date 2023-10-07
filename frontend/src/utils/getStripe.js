import { loadStripe } from '@stripe/stripe-js'

let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      'pk_test_51Npb99Aaac4N4QZyzW5Mwlx539feh1G0DaxQ8MaNy8FZSr7R2zVBVhOHBuf9Tc0yuRWBFjELBk77au6hUbvqdbLB00LDbDDv8m'
    )
  }
  return stripePromise
}

export default getStripe
