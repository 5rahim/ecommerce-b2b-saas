import { getURL } from '@/lib/stripe/helpers'
import { stripe } from '@/lib/stripe/stripe'
import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0'
import { NextApiRequest, NextApiResponse } from 'next'

export default withApiAuthRequired(async function createCheckoutSession(
   req: NextApiRequest,
   res: NextApiResponse,
) {
   async function createOrRetrieveCustomer(param: { uuid: any; email: any }) {
   
   }
   
   if (req.method === 'POST') {
      const { price, quantity = 1, metadata = {} } = req.body
      
      try {
   
         const { user } = getSession(req, res);
         
         const customer: any = await createOrRetrieveCustomer({
            uuid: user?.id || '',
            email: user?.email || '',
         })
         
         const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            billing_address_collection: 'auto',
            customer,
            line_items: [
               {
                  price: price.id,
                  quantity,
               },
            ],
            mode: 'subscription',
            allow_promotion_codes: true,
            subscription_data: {
               trial_from_plan: true,
               metadata,
            },
            success_url: `${getURL()}/account`,
            cancel_url: `${getURL()}/`,
         })
         
         return res.status(200).json({ sessionId: session.id })
      }
      catch (err: any) {
         console.log(err)
         res
            .status(500)
            .json({ error: { statusCode: 500, message: err.message } })
      }
   } else {
      res.setHeader('Allow', 'POST')
      res.status(405).end('Method Not Allowed')
   }
})
