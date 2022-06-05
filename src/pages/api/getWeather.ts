// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const axios = require("axios");
import { WEATHER_API_URL } from '@constants';
import type { NextApiRequest, NextApiResponse } from 'next'

const getWeather = (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { lat, lon } = req.query
  const options = {
    method: 'GET',
    url: WEATHER_API_URL,
    params: { lat, lon, appid: process.env.WEATHER_API_KEY }
  }

  axios.request(options)
    .then((apiResponse: any) => {
      res.status(200).json({ statusCode: 200, weather: apiResponse.data })
    }).catch((err: any) => {
      res.status(500).json({ statusCode: 500, message: err.message })
    });
}

export default getWeather
