import prisma from 'lib/prisma'

export default async function handler(req, res) {
    if (req.method === 'GET') {

      const expense = await prisma.trip.findMany()
      res.status(200).json(expense)

      return
    
  }

  if (req.method === 'POST') {
      const { trip, name, date, amount, currency } = req.body

      if (!trip) {
          return res
          .status(400)
          .json({message: 'missing required parameters'})
      }

      if (!name) {
        return res
        .status(400)
        .json({message: 'missing required parameters'})
    }

    if (!amount) {
        return res
        .status(400)
        .json({message: 'missing required parameters'})
    }

    if (!currency) {
        return res
        .status(400)
        .json({message: 'missing required parameters'})
    }

    await prisma.expense.create({
        data: {
            trip,
            name,
            date,
            amount,
            currency,
        },
    })

	return	res.status(200).end()
  }
  
  res.status(405).json({message: 'Method Not Allowd'})

}