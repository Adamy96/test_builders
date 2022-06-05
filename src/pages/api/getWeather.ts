import Cors from 'cors'
import { initMiddleware } from '@helper'
const axios = require("axios");
import { WEATHER_API_URL } from '@constants';
import type { NextApiRequest, NextApiResponse } from 'next'

const cors = initMiddleware(
  Cors({
    methods: ['GET'],
  })
)

const getWeather = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  await cors(req, res)
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
