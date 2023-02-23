import FormLogin from './components/FormLogin'
import 'twin.macro'
import { logout } from './utils/authFunction'
import Button from './components/Button'

function Index() {
    return (
        <div tw='flex flex-col container mx-auto p-1 px-0 lg:px-32'>
            HI
            <Button onClick={logout}> Logout HERE</Button>
        </div>
    )
}

export default Index
