import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TransactionValidator from 'App/Validators/TransactionValidator'

export default class TransactionsController {

  // criar nova transação
  public async store({ request , auth, response }: HttpContextContract) {
    try {
      const user = auth.user 
      if(!user){
        return response.status(401).json({ message: 'Não autorizado.'})
      }
      const data = await request.validate(TransactionValidator)
      
      await user.related('transactions').create(data)
      return 'Transação criada com sucesso.'

    } catch (error) {
      if(error?.messages?.errors[0]?.message) {
        return response.status(400).json({ message: error.messages.errors[0].message })
      } 
      return response.status(400).json({ message: 'Erro ao criar transação.' })
    }
    
  }
  public async getByYear({ params, auth, response }: HttpContextContract) {
    try {
      const user = auth.user 
      if(!user){
        return response.status(401).json({ message: 'Não autorizado.'})
      }
      const year = params.year 

      interface MonthlyTotal {
        month: number,
        total: number
      }

      const totalExpenses: MonthlyTotal[] = []
      const totalIncomes: MonthlyTotal[] = []
      const totalInvestments: MonthlyTotal[] = []

      for(let month = 1; month <= 12; month++) {
        const expenses = await user.related('transactions').query()
        .whereRaw('EXTRACT(YEAR FROM date) = ?', [year])
        .whereRaw('EXTRACT(MONTH FROM date) = ?', [month])
        .where('type', 'expense')

        const incomes = await user.related('transactions').query()
        .whereRaw('EXTRACT(YEAR FROM date) = ?', [year])
        .whereRaw('EXTRACT(MONTH FROM date) = ?', [month])
        .where('type', 'income')

        const investments = await user.related('transactions').query()
        .whereRaw('EXTRACT(YEAR FROM date) = ?', [year])
        .whereRaw('EXTRACT(MONTH FROM date) = ?', [month])
        .where('type', 'investment')

        const totalByMonthExpenses: number = expenses.reduce((acc, expense) => acc + Number(expense.amount), 0)
        const totalByMonthIncomes: number = incomes.reduce((acc, income) => acc + Number(income.amount), 0)
        const totalByMonthInvestmets: number = investments.reduce((acc, investment) => acc + Number(investment.amount), 0)

        totalExpenses.push({ 
          month, total: totalByMonthExpenses || 0
        })
        totalIncomes.push({
          month, total: totalByMonthIncomes || 0
        })
        totalInvestments.push({
          month, total: totalByMonthInvestmets || 0
        })
      }

      const totalAnnualExpenses: number = totalExpenses.reduce((acc, { total }) => acc + total, 0);
      const totalAnnualIncomes: number = totalIncomes.reduce((acc, { total }) => acc + total, 0);
      const totalAnnualInvestments: number = totalInvestments.reduce((acc, { total }) => acc + total, 0);

      return response.status(200).json({
        totalExpenses, totalIncomes, totalInvestments,
        totalAnnualExpenses, totalAnnualIncomes, totalAnnualInvestments
      })
  
    } catch (error) {
      if(error?.messages?.errors[0]?.message) {
        return error.messages.errors[0].message
      } 
      return 'Erro ao buscar transações.'
    }
  }

  public async getByMonth({ params, auth, response }: HttpContextContract) {
    try {
      const user = auth.user 

      // Filter: opções -> date/05/02/2024 , category/Essenciais, destiny/Posto , account/Sicredi , status/false
      const filter = params.filter 
      const option_filter = params.option 

      let order = params.order // amount crescente, amount decrescente, status true, status false
      let option_order = 'asc' 

     

      if(!user){
        return response.status(401).json({ message: 'Não autorizado.'})
      }
      const expenses = await user.related('transactions').query()
      .whereRaw('EXTRACT(YEAR FROM date) = ?', [params.year])
      .whereRaw('EXTRACT(MONTH FROM date) = ?', [params.month])
      .where('type', 'expense')
      .where(filter, option_filter)

      const incomes = await user.related('transactions').query()
      .whereRaw('EXTRACT(YEAR FROM date) = ?', [params.year])
      .whereRaw('EXTRACT(MONTH FROM date) = ?', [params.month])
      .where('type', 'income')
      .where(filter, option_filter)

      const investments = await user.related('transactions').query()
      .whereRaw('EXTRACT(YEAR FROM date) = ?', [params.year])
      .whereRaw('EXTRACT(MONTH FROM date) = ?', [params.month])
      .where('type', 'investment')
      .where(filter, option_filter)

      const totalExpenses: number = expenses.reduce((acc, expense) => acc + Number(expense.amount), 0)
      const totalIncomes: number = incomes.reduce((acc, income) => acc + Number(income.amount), 0)
      const totalInvestments: number = investments.reduce((acc, investment) => acc + Number(investment.amount), 0)

      const surplus =  totalIncomes - (totalExpenses + totalInvestments)

      return response.status(200).json({
        transactions: {
          expenses, 
          incomes, 
          investments, 
          totalExpenses, 
          totalIncomes, 
          totalInvestments, 
          surplus
        }
        
      })
    } catch (error) {
      if(error?.messages?.errors[0]?.message) {
        return error.messages.errors[0].message
      } 
      return 'Erro ao vuscar transações.'
    }
  }

  public async destroy({ params, auth, response }: HttpContextContract) {
    try {
      const user = auth.user 
      if(!user){
        return response.status(401).json({ message: 'Não autorizado.'})
      }
      const transaction = await user.related('transactions').query().where('id', params.id).first()

      await transaction?.delete()
      
    } catch (error) {
      if(error?.messages?.errors[0]?.message) {
        return error.messages.errors[0].message
      } 
      return 'Erro ao deletar transação.'
    }
  }

  public async changeStatus({ params, auth, response }: HttpContextContract) {
    try {
      const user = auth.user 
      if(!user){
        return response.status(401).json({ message: 'Não autorizado.'})
      }
      const transaction = await user.related('transactions').query().where('id', params.id).first()

      if(transaction && transaction.status !== undefined) {
        transaction.status = !transaction.status;
        await transaction.save(); // Salvar a transação atualizada
      }
       

    } catch (error) {
      if(error?.messages?.errors[0]?.message) {
        return error.messages.errors[0].message
      } 
      return 'Erro ao atualizar status da transação.'
    }
  }
}
