# Delta-Neutral (Frontend)
A dashboard interface for displaying Delta-Neutral trading opportunities.

## Links

### Frontend
URL: [https://delta-neutral.louisheal.com/](https://delta-neutral.louisheal.com/)

Github: [https://github.com/louisheal/delta-neutral-crypto-frontend](https://github.com/louisheal/delta-neutral-crypto-frontend)

### Backend
URL: [https://api.delta-neutral.louisheal.com/](https://api.delta-neutral.louisheal.com/)

Github: [https://github.com/louisheal/delta-neutral-crypto-backend](https://github.com/louisheal/delta-neutral-crypto-backend)

## Endpoints
There are two endpoints available from the API:

### GET `/pools`
Returns a JSON list of Pool objects with the following structure:

  `pool_id` - A unique identifier for the pool.

  `pool_name`: The display name of the pool.

  `token_one_symbol`: The ticker symbol of the first coin in the pool.

  `token_two_symbol`: The ticker symbol of the second coin in the pool.

  `trading_fee`: The 7 day average trading fees earnt by liquidity providers to the pool.

  `borrow_rate_one`: The current interest rate for borrowing the first coin.

  `borrow_rate_two`: The current interest rate for borrowing the second coin.

### POST `/simulate`
Takes in a JSON body with 3 required arguments:

  `pool_id` - The unique identifier of the pool to simulate.

  `usd_to_invest` - The initial amount of money to simulate investing in USD.

  `duration_days` - The number of days to simulate for.


Returns a JSON list of the data necessary to display a graph of the simulation:

  `[0]` - A list of the labels for the x-axis.

  `[1]` - A list of the long position values.

  `[2]` - A list of the short position values.

  `[3]` - A list of the total position values.


## Available Scripts
In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.