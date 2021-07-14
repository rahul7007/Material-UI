import { makeStyles } from '@material-ui/core/styles'

//hook
//theme as arg for additional style
const useStyles = makeStyles((theme) => ({
    myContainer: {
        backgroundColor: '#A3E4D7',
        padding: theme.spacing(8, 0, 6)
    },
    icons: {
        marginRight: '20px'
    },
    buttons: {
        marginTop: '40px'
    },
    cardGrid: {
        padding: '20px, 0'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia: {
        paddingTop: '56.25%' //16:9
    },
    cardContent: {
        flecGrow: 1
    },
    footer: {
        backgroundColor: 'yellow',
        padding: '50px, 0'
    }
}))

export default useStyles