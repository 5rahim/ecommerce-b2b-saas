export default {
   basic: {
      name: 'Basic',
      id: "prod_LFcxc8b0pwXFIH",
      prices: {
         xof: {
            id: "price_1KZ7hODvTgH5srvwrK7upaw4",
            unit_amount: 3000,
         },
         ngn: {
            id: "price_1KZ7hODvTgH5srvwGAwSz0yl",
            unit_amount: 2000,
         },
         usd: {
            id: "price_1KZ7hODvTgH5srvwkobm2mP9",
            unit_amount: 5,
         },
      },
   },
   pro: {
      name: 'Pro',
      id: "prod_LFcziufqHwf59Z",
      prices: {
         xof: {
            id: "price_1KZ7jmDvTgH5srvwa09HKlrt",
            unit_amount: 15000,
         },
         ngn: {
            id: "price_1KZ7jmDvTgH5srvwVl0Djejr",
            unit_amount: 10500,
         },
         usd: {
            id: "price_1KZ7jmDvTgH5srvwNmwVCuIO",
            unit_amount: 25,
         },
      },
   },
} as {
   [sub: string]: {
      id: string,
      name: string,
      prices: {
         [currency: string]: { id: string, unit_amount: number }
      }
   }
   
}
