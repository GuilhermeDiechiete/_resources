import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {

    Route.get('/', 'AccountsController.index')
    Route.post('/', 'AccountsController.store')
    Route.delete('/:id', 'AccountsController.destroy').where('id', 
    {
        match: /^[0-9]+$/,
        cast: (id) => Number(id),
    })

}).prefix('account').middleware('auth')
