import { NextApiRequest, NextApiResponse } from 'next'
import OuraApiV2Client from 'oura-api-v2-client'
import {
  DailyActivityResponse,
  PersonalInfoResponse,
} from 'oura-api-v2-client/dist/cjs/types/oura/response'

type SuccessResponse = {
  dailyActivity: DailyActivityResponse
  personalInfo: PersonalInfoResponse
}

type ErrorResponse = {
  error: unknown
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<SuccessResponse | ErrorResponse>
) => {
  try {
    const ouraApiV2Client = new OuraApiV2Client(
      process.env.OURA_DEV_TOKEN ?? ''
    )

    const dailyActivity = await ouraApiV2Client.dailyActivity()
    const personalInfo = await ouraApiV2Client.personalInfo()

    res.status(200).json({ dailyActivity, personalInfo })
  } catch (error) {
    res.status(500).json({ error: error })
  }
}
