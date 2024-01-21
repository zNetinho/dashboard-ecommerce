import Stripe from "stripe";
const stripe = new Stripe("sk_test_51O49zDETWqIIP9kHnk1wdJUx6nuNcgLPTUG3A9UgKC2JeUrwlqsXA9yUDPy44PdGnNP92nU61BKSsxgcTnoW5vq400HUYYnCeX", {
    apiVersion: "2023-10-16"
});

export default stripe;