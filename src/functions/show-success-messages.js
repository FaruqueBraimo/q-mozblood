import { Notify, Loading } from 'quasar'

export function showSuccessMessage(successMessage) {
    Loading.hide()
    Notify.create({
        position: 'top-right',
        type: 'positive',
        color:      'green',
        message:    successMessage,
        actions: [{ icon: 'close', color: 'white' }]
    })

} 