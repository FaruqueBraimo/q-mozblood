import { Loading } from 'quasar'

export function showLoading (isLoading) {
    if (isLoading) {

        let message = isLoading && isLoading.message ? isLoading.message : 'Em progresso!'

        Loading.show({
            message: message + '.<br/><span class="text-primary">Por favor aguarde,...</span>'
        })

    } else {

        Loading.hide()

    }


}