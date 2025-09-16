const GUEST_LOGINS = {
    customer : {
        username: 'andrey',
        password: 'asdasd'
    },
    business : {
        username: 'kevin',
        password: 'asdasd24'
    }
}

const API_BASE = "http://157.180.86.208/api/";
const STATIC_BASE_URL = 'http://157.180.86.208/';


const LOGIN_URL = API_BASE + 'login/';
const REGISTER_URL = API_BASE + 'registration/';
const PROFILE_URL = API_BASE + 'profile/';
const BUSINESS_PROFILES_URL = API_BASE + 'profiles/business/';
const CUSTOMER_PROFILES_URL = API_BASE + 'profiles/customer/';
const REVIEW_URL = API_BASE + 'reviews/';
const ORDER_URL = API_BASE + 'orders/';
const OFFER_URL = API_BASE + 'offers/';
const OFFER_DETAIL_URL = API_BASE + 'offerdetails/';
const BASE_INFO_URL = API_BASE + 'base-info/';
const OFFER_INPROGRESS_COUNT_URL = API_BASE + 'order-count/';
const OFFER_COMPLETED_COUNT_URL = API_BASE + 'completed-order-count/';

const PAGE_SIZE = 6