import { Notify, Loading } from 'quasar'

export function showMobileSuccessMessage(successMessage) {
    Notify.create({
        color:      'green',
        message:    successMessage,
        actions: [{ icon: 'close', color: 'white' }]
    })

}