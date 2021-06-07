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
