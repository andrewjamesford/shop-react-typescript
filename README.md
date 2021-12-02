This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

It uses [react-query](https://react-query.tanstack.com) for data fetching & caching

This is an example app I'm using for my blog at [andrewford.co.nz](https://andrewford.co.nz)

## Getting Started

Create an .env file in the root of the project with the following

```env
# .env
HOSTNAME=localhost
PORT=3001
NEXT_PUBLIC_HOST=http://$HOSTNAME:$PORT
HOST=http://$HOSTNAME:$PORT
```

Install all the modules:

```bash
npm i
# or
yarn
```

Then run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

## Product details for Stripe

T-Shirt
A T-Shirt with our shoe logo.
tshirt.jpg
49.99

Sweatshirt
A Sweatshirt with our shoe logo.
sweatshirt.jpg
99.99

Cap
A Cap with our shoe logo.
cap.jpg
29.99

Cap 5 Panel
A 5 panel cap with our shoe logo.
cap-5panel.jpg
29.99

Tote bag
A tote bag with our shoe logo.
tote.jpg
9.99

Tank Racerback
A tank top (racerback) with our shoe logo.
tank-bella.jpg
19.99
