import cron from 'node-cron'
import axios from 'axios'

cron.schedule('*/3 * * * * *', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users')
  console.log(response)
})