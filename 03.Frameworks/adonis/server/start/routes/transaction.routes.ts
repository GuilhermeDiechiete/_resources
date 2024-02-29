import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {

    Route.post('/', 'TransactionsController.store') // criar
    Route.put('/:id', 'TransactionsController.changeStatus') // editar apenas o status
    Route.delete('/:id', 'TransactionsController.destroy') // excluir 
    
    Route.group(() => {

        Route.get('/', 'TransactionsController.getByYear')
        Route.get('/:month', 'TransactionsController.getByMonth')

    }).prefix('/:year/:filter/:option')
    .where('year', /^[0-9]{4}$/) 
    .where('month', /^[0-9]{1,2}$/) 

}).prefix('transaction').middleware('auth')
.where('id', {
    match: /^[0-9]+$/,
    cast: (id) => Number(id),
})