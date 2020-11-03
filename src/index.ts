import { Merchant } from './Merchant';
import { Mastercard } from './Mastercard';
import { configs } from './configs';

const test_merchant = new Merchant(configs);
const mastercard_obj = new Mastercard(test_merchant);

