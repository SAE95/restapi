import prisma from 'lib/prisma'

export default async function handler(req, res) {
    if (req.method === 'GET') {

      const expense = await prisma.trip.findMany()
      res.status(200).json(expense)

      return
    
  }

  if (req.method === 'POST') {

	return	res.status(200).end()
  }
  
  res.status(405).json({message: 'Method Not Allowd'})

}